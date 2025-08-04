import { type Artist, type InsertArtist, type Track, type InsertTrack, type TrackWithArtist, type ArtistWithTracks } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Artist operations
  getArtist(id: string): Promise<Artist | undefined>;
  getArtistByUsername(username: string): Promise<Artist | undefined>;
  createArtist(artist: InsertArtist): Promise<Artist>;
  updateArtist(id: string, updates: Partial<Artist>): Promise<Artist | undefined>;

  // Track operations
  getTrack(id: string): Promise<Track | undefined>;
  getTrackWithArtist(id: string): Promise<TrackWithArtist | undefined>;
  createTrack(track: InsertTrack): Promise<Track>;
  updateTrack(id: string, updates: Partial<Track>): Promise<Track | undefined>;
  deleteTrack(id: string): Promise<boolean>;
  getTracksByArtist(artistId: string): Promise<Track[]>;
  getAllTracksWithArtists(): Promise<TrackWithArtist[]>;
  incrementTrackPlays(id: string): Promise<void>;
  toggleTrackLike(id: string): Promise<void>;

  // Featured/Recent tracks
  getRecentTracks(limit?: number): Promise<TrackWithArtist[]>;
  getPopularTracks(limit?: number): Promise<TrackWithArtist[]>;
}

export class MemStorage implements IStorage {
  private artists: Map<string, Artist>;
  private tracks: Map<string, Track>;

  constructor() {
    this.artists = new Map();
    this.tracks = new Map();
    this.seedData();
  }

  private seedData() {
    // Create a sample artist
    const sampleArtist: Artist = {
      id: "artist-1",
      name: "Alex Rivera",
      username: "alexrivera",
      bio: "Electronic music producer and DJ creating immersive soundscapes",
      genre: "Electronic",
      avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=600&fit=crop",
      followers: 8200,
      totalPlays: 127500,
      createdAt: new Date(),
    };
    this.artists.set(sampleArtist.id, sampleArtist);

    // Create sample tracks
    const sampleTracks: Track[] = [
      {
        id: "track-1",
        title: "Neon Dreams",
        description: "A journey through digital landscapes with ethereal synths and driving beats.",
        genre: "Electronic",
        duration: 261, // 4:21
        filename: "neon-dreams.mp3",
        fileUrl: "/uploads/neon-dreams.mp3",
        artwork: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
        plays: 12300,
        likes: 456,
        artistId: "artist-1",
        isPublic: true,
        createdAt: new Date(Date.now() - 86400000), // 1 day ago
        updatedAt: new Date(Date.now() - 86400000),
      },
      {
        id: "track-2",
        title: "Synthwave City",
        description: "Retro-futuristic vibes with analog warmth and nostalgic melodies.",
        genre: "Synthwave",
        duration: 312, // 5:12
        filename: "synthwave-city.mp3",
        fileUrl: "/uploads/synthwave-city.mp3",
        artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
        plays: 8700,
        likes: 234,
        artistId: "artist-1",
        isPublic: true,
        createdAt: new Date(Date.now() - 172800000), // 2 days ago
        updatedAt: new Date(Date.now() - 172800000),
      },
      {
        id: "track-3",
        title: "Digital Horizon",
        description: "Ambient textures meet rhythmic progression in this atmospheric piece.",
        genre: "Ambient",
        duration: 393, // 6:33
        filename: "digital-horizon.mp3",
        fileUrl: "/uploads/digital-horizon.mp3",
        artwork: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
        plays: 15100,
        likes: 678,
        artistId: "artist-1",
        isPublic: true,
        createdAt: new Date(Date.now() - 259200000), // 3 days ago
        updatedAt: new Date(Date.now() - 259200000),
      },
    ];

    sampleTracks.forEach(track => this.tracks.set(track.id, track));
  }

  async getArtist(id: string): Promise<Artist | undefined> {
    return this.artists.get(id);
  }

  async getArtistByUsername(username: string): Promise<Artist | undefined> {
    return Array.from(this.artists.values()).find(artist => artist.username === username);
  }

  async createArtist(insertArtist: InsertArtist): Promise<Artist> {
    const id = randomUUID();
    const artist: Artist = {
      ...insertArtist,
      id,
      followers: 0,
      totalPlays: 0,
      createdAt: new Date(),
      bio: insertArtist.bio || null,
      genre: insertArtist.genre || null,
      avatar: insertArtist.avatar || null,
      coverImage: insertArtist.coverImage || null,
    };
    this.artists.set(id, artist);
    return artist;
  }

  async updateArtist(id: string, updates: Partial<Artist>): Promise<Artist | undefined> {
    const existing = this.artists.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...updates };
    this.artists.set(id, updated);
    return updated;
  }

  async getTrack(id: string): Promise<Track | undefined> {
    return this.tracks.get(id);
  }

  async getTrackWithArtist(id: string): Promise<TrackWithArtist | undefined> {
    const track = this.tracks.get(id);
    if (!track) return undefined;
    
    const artist = this.artists.get(track.artistId);
    if (!artist) return undefined;
    
    return { ...track, artist };
  }

  async createTrack(insertTrack: InsertTrack): Promise<Track> {
    const id = randomUUID();
    const track: Track = {
      ...insertTrack,
      id,
      plays: 0,
      likes: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      description: insertTrack.description || null,
      genre: insertTrack.genre || null,
      duration: insertTrack.duration || null,
      artwork: insertTrack.artwork || null,
    };
    this.tracks.set(id, track);
    return track;
  }

  async updateTrack(id: string, updates: Partial<Track>): Promise<Track | undefined> {
    const existing = this.tracks.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...updates, updatedAt: new Date() };
    this.tracks.set(id, updated);
    return updated;
  }

  async deleteTrack(id: string): Promise<boolean> {
    return this.tracks.delete(id);
  }

  async getTracksByArtist(artistId: string): Promise<Track[]> {
    return Array.from(this.tracks.values())
      .filter(track => track.artistId === artistId)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async getAllTracksWithArtists(): Promise<TrackWithArtist[]> {
    const tracks = Array.from(this.tracks.values());
    const tracksWithArtists: TrackWithArtist[] = [];
    
    for (const track of tracks) {
      const artist = this.artists.get(track.artistId);
      if (artist) {
        tracksWithArtists.push({ ...track, artist });
      }
    }
    
    return tracksWithArtists.sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async incrementTrackPlays(id: string): Promise<void> {
    const track = this.tracks.get(id);
    if (track) {
      track.plays = (track.plays || 0) + 1;
      this.tracks.set(id, track);
      
      // Update artist total plays
      const artist = this.artists.get(track.artistId);
      if (artist) {
        artist.totalPlays = (artist.totalPlays || 0) + 1;
        this.artists.set(artist.id, artist);
      }
    }
  }

  async toggleTrackLike(id: string): Promise<void> {
    const track = this.tracks.get(id);
    if (track) {
      track.likes = (track.likes || 0) + 1;
      this.tracks.set(id, track);
    }
  }

  async getRecentTracks(limit = 6): Promise<TrackWithArtist[]> {
    const allTracks = await this.getAllTracksWithArtists();
    return allTracks.slice(0, limit);
  }

  async getPopularTracks(limit = 10): Promise<TrackWithArtist[]> {
    const allTracks = await this.getAllTracksWithArtists();
    return allTracks
      .sort((a, b) => (b.plays || 0) - (a.plays || 0))
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
