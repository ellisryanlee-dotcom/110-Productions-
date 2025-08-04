import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTrackSchema, insertArtistSchema, insertCommentSchema } from "@shared/schema";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage_multer = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage_multer,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.mp3', '.wav', '.flac', '.m4a'];
    const fileExt = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(fileExt)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only MP3, WAV, FLAC, and M4A files are allowed.'));
    }
  },
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Serve uploaded files
  app.use('/uploads', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Accept-Ranges', 'bytes');
    next();
  }, express.static(uploadDir));

  // Get all tracks with artists
  app.get("/api/tracks", async (req, res) => {
    try {
      const tracks = await storage.getAllTracksWithArtists();
      res.json(tracks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tracks" });
    }
  });

  // Get recent tracks
  app.get("/api/tracks/recent", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 6;
      const tracks = await storage.getRecentTracks(limit);
      res.json(tracks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recent tracks" });
    }
  });

  // Get popular tracks
  app.get("/api/tracks/popular", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const tracks = await storage.getPopularTracks(limit);
      res.json(tracks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch popular tracks" });
    }
  });

  // Get single track with artist
  app.get("/api/tracks/:id", async (req, res) => {
    try {
      const track = await storage.getTrackWithArtist(req.params.id);
      if (!track) {
        return res.status(404).json({ message: "Track not found" });
      }
      res.json(track);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch track" });
    }
  });

  // Increment track plays
  app.post("/api/tracks/:id/play", async (req, res) => {
    try {
      await storage.incrementTrackPlays(req.params.id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to increment plays" });
    }
  });

  // Toggle track like (legacy route - moved to new endpoint)
  app.post("/api/tracks/:id/like", async (req, res) => {
    try {
      const { artistId } = req.body;
      if (!artistId) {
        return res.status(400).json({ message: "Artist ID is required" });
      }
      const result = await storage.toggleLike(req.params.id, artistId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Failed to toggle like" });
    }
  });

  // Upload new track
  app.post("/api/tracks", upload.single('audio'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No audio file provided" });
      }

      const trackData = {
        title: req.body.title,
        description: req.body.description || null,
        genre: req.body.genre || null,
        duration: parseInt(req.body.duration) || null,
        filename: req.file.filename,
        fileUrl: `/uploads/${req.file.filename}`,
        artwork: req.body.artwork || null,
        artistId: req.body.artistId,
        isPublic: req.body.isPublic !== 'false',
      };

      const validatedData = insertTrackSchema.parse(trackData);
      const track = await storage.createTrack(validatedData);
      const trackWithArtist = await storage.getTrackWithArtist(track.id);
      
      res.status(201).json(trackWithArtist);
    } catch (error: any) {
      // Clean up uploaded file if track creation fails
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      res.status(400).json({ message: error.message || "Failed to create track" });
    }
  });

  // Get artist profile
  app.get("/api/artists/:id", async (req, res) => {
    try {
      const artist = await storage.getArtist(req.params.id);
      if (!artist) {
        return res.status(404).json({ message: "Artist not found" });
      }
      const tracks = await storage.getTracksByArtist(req.params.id);
      res.json({ ...artist, tracks });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch artist" });
    }
  });

  // Get artist by username
  app.get("/api/artists/username/:username", async (req, res) => {
    try {
      const artist = await storage.getArtistByUsername(req.params.username);
      if (!artist) {
        return res.status(404).json({ message: "Artist not found" });
      }
      const tracks = await storage.getTracksByArtist(artist.id);
      res.json({ ...artist, tracks });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch artist" });
    }
  });

  // Create new artist
  app.post("/api/artists", async (req, res) => {
    try {
      const validatedData = insertArtistSchema.parse(req.body);
      const artist = await storage.createArtist(validatedData);
      res.status(201).json(artist);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create artist" });
    }
  });

  // Toggle like for a track
  app.post("/api/tracks/:trackId/like", async (req, res) => {
    try {
      const { trackId } = req.params;
      const { artistId } = req.body;
      
      if (!artistId) {
        return res.status(400).json({ message: "Artist ID is required" });
      }

      const result = await storage.toggleLike(trackId, artistId);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to toggle like" });
    }
  });

  // Get comments for a track
  app.get("/api/tracks/:trackId/comments", async (req, res) => {
    try {
      const { trackId } = req.params;
      const comments = await storage.getCommentsByTrack(trackId);
      res.json(comments);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to fetch comments" });
    }
  });

  // Create a comment
  app.post("/api/tracks/:trackId/comments", async (req, res) => {
    try {
      const { trackId } = req.params;
      const commentData = {
        ...req.body,
        trackId,
      };
      
      const validatedData = insertCommentSchema.parse(commentData);
      const comment = await storage.createComment(validatedData);
      
      // Return comment with artist info
      const commentWithArtist = await storage.getCommentsByTrack(trackId);
      const newComment = commentWithArtist.find(c => c.id === comment.id);
      
      res.status(201).json(newComment);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create comment" });
    }
  });

  // Delete a comment
  app.delete("/api/comments/:commentId", async (req, res) => {
    try {
      const { commentId } = req.params;
      const { artistId } = req.body;
      
      if (!artistId) {
        return res.status(400).json({ message: "Artist ID is required" });
      }

      const success = await storage.deleteComment(commentId, artistId);
      if (!success) {
        return res.status(404).json({ message: "Comment not found or unauthorized" });
      }
      
      res.json({ message: "Comment deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to delete comment" });
    }
  });

  // Get track with detailed info (likes, comments count, etc.)
  app.get("/api/tracks/:trackId/details", async (req, res) => {
    try {
      const { trackId } = req.params;
      const { artistId } = req.query;
      
      const trackDetails = await storage.getTrackWithDetails(trackId, artistId as string);
      if (!trackDetails) {
        return res.status(404).json({ message: "Track not found" });
      }
      
      res.json(trackDetails);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to fetch track details" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
