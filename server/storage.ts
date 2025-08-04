import { 
  type Artist, 
  type InsertArtist, 
  type Track, 
  type InsertTrack, 
  type TrackWithArtist, 
  type ArtistWithTracks,
  type Comment,
  type InsertComment,
  type CommentWithArtist,
  type Like,
  type InsertLike,
  type TrackWithDetails
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { artists, tracks, comments, likes } from "@shared/schema";
import { eq, desc, sql, and } from "drizzle-orm";

export interface IStorage {
  // Artist operations
  getArtist(id: string): Promise<Artist | undefined>;
  getArtistByUsername(username: string): Promise<Artist | undefined>;
  createArtist(artist: InsertArtist): Promise<Artist>;
  updateArtist(id: string, updates: Partial<Artist>): Promise<Artist | undefined>;

  // Track operations
  getTrack(id: string): Promise<Track | undefined>;
  getTrackWithArtist(id: string): Promise<TrackWithArtist | undefined>;
  getTrackWithDetails(id: string, artistId?: string): Promise<TrackWithDetails | undefined>;
  createTrack(track: InsertTrack): Promise<Track>;
  updateTrack(id: string, updates: Partial<Track>): Promise<Track | undefined>;
  deleteTrack(id: string): Promise<boolean>;
  getTracksByArtist(artistId: string): Promise<Track[]>;
  getAllTracksWithArtists(): Promise<TrackWithArtist[]>;
  incrementTrackPlays(id: string): Promise<void>;

  // Like operations
  toggleLike(trackId: string, artistId: string): Promise<{ isLiked: boolean; likesCount: number }>;
  getLikesCount(trackId: string): Promise<number>;
  isTrackLiked(trackId: string, artistId: string): Promise<boolean>;

  // Comment operations
  createComment(comment: InsertComment): Promise<Comment>;
  getCommentsByTrack(trackId: string): Promise<CommentWithArtist[]>;
  deleteComment(id: string, artistId: string): Promise<boolean>;

  // Featured/Recent tracks
  getRecentTracks(limit?: number): Promise<TrackWithArtist[]>;
  getPopularTracks(limit?: number): Promise<TrackWithArtist[]>;
}

export class DatabaseStorage implements IStorage {
  private seedInitialized = false;

  private async ensureSeeded() {
    if (!this.seedInitialized) {
      await this.seedData();
      this.seedInitialized = true;
    }
  }

  private async seedData() {
    try {
      // Check if sample artist already exists
      const existingArtist = await db.select().from(artists).where(eq(artists.username, "alexrivera")).limit(1);
      
      if (existingArtist.length === 0) {
        // Create sample artist
        const [sampleArtist] = await db.insert(artists).values({
          name: "Alex Rivera",
          username: "alexrivera", 
          bio: "Electronic music producer and DJ creating immersive soundscapes",
          genre: "Electronic",
          avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
          coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=600&fit=crop",
          followers: 8200,
          totalPlays: 127500,
        }).returning();

        // Create sample tracks
        await db.insert(tracks).values([
          {
            title: "Neon Dreams",
            description: "A journey through digital landscapes with ethereal synths and driving beats.",
            genre: "Electronic",
            duration: 261,
            filename: "neon-dreams.mp3",
            fileUrl: "/uploads/neon-dreams.mp3",
            artwork: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
            plays: 12300,
            likes: 456,
            artistId: sampleArtist.id,
            isPublic: true,
          },
          {
            title: "Synthwave City", 
            description: "Retro-futuristic vibes with analog warmth and nostalgic melodies.",
            genre: "Synthwave",
            duration: 312,
            filename: "synthwave-city.mp3",
            fileUrl: "/uploads/synthwave-city.mp3",
            artwork: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
            plays: 8700,
            likes: 234,
            artistId: sampleArtist.id,
            isPublic: true,
          },
          {
            title: "Digital Horizon",
            description: "Ambient textures meet rhythmic progression in this atmospheric piece.",
            genre: "Ambient", 
            duration: 393,
            filename: "digital-horizon.mp3",
            fileUrl: "/uploads/digital-horizon.mp3",
            artwork: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
            plays: 15100,
            likes: 678,
            artistId: sampleArtist.id,
            isPublic: true,
          },
        ]);
      }
    } catch (error) {
      console.log("Sample data already exists or error seeding:", error);
    }
  }

  async getArtist(id: string): Promise<Artist | undefined> {
    await this.ensureSeeded();
    const [artist] = await db.select().from(artists).where(eq(artists.id, id)).limit(1);
    return artist || undefined;
  }

  async getArtistByUsername(username: string): Promise<Artist | undefined> {
    const [artist] = await db.select().from(artists).where(eq(artists.username, username)).limit(1);
    return artist || undefined;
  }

  async createArtist(insertArtist: InsertArtist): Promise<Artist> {
    const [artist] = await db.insert(artists).values(insertArtist).returning();
    return artist;
  }

  async updateArtist(id: string, updates: Partial<Artist>): Promise<Artist | undefined> {
    const [artist] = await db.update(artists)
      .set(updates)
      .where(eq(artists.id, id))
      .returning();
    return artist || undefined;
  }

  async getTrack(id: string): Promise<Track | undefined> {
    const [track] = await db.select().from(tracks).where(eq(tracks.id, id)).limit(1);
    return track || undefined;
  }

  async getTrackWithArtist(id: string): Promise<TrackWithArtist | undefined> {
    const result = await db
      .select()
      .from(tracks)
      .innerJoin(artists, eq(tracks.artistId, artists.id))
      .where(eq(tracks.id, id))
      .limit(1);
    
    if (!result[0]) return undefined;
    
    return {
      ...result[0].tracks,
      artist: result[0].artists,
    };
  }

  async getTrackWithDetails(id: string, artistId?: string): Promise<TrackWithDetails | undefined> {
    const result = await db
      .select({
        track: tracks,
        artist: artists,
        likesCount: sql<number>`count(distinct ${likes.id})`.as('likesCount'),
        commentsCount: sql<number>`count(distinct ${comments.id})`.as('commentsCount'),
      })
      .from(tracks)
      .innerJoin(artists, eq(tracks.artistId, artists.id))
      .leftJoin(likes, eq(likes.trackId, tracks.id))
      .leftJoin(comments, eq(comments.trackId, tracks.id))
      .where(eq(tracks.id, id))
      .groupBy(tracks.id, artists.id)
      .limit(1);

    if (!result[0]) return undefined;

    let isLiked = false;
    if (artistId) {
      isLiked = await this.isTrackLiked(id, artistId);
    }

    return {
      ...result[0].track,
      artist: result[0].artist,
      likesCount: Number(result[0].likesCount) || 0,
      commentsCount: Number(result[0].commentsCount) || 0,
      isLiked,
    };
  }

  async createTrack(insertTrack: InsertTrack): Promise<Track> {
    const [track] = await db.insert(tracks).values(insertTrack).returning();
    return track;
  }

  async updateTrack(id: string, updates: Partial<Track>): Promise<Track | undefined> {
    const [track] = await db.update(tracks)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(tracks.id, id))
      .returning();
    return track || undefined;
  }

  async deleteTrack(id: string): Promise<boolean> {
    const result = await db.delete(tracks).where(eq(tracks.id, id));
    return (result.rowCount || 0) > 0;
  }

  async getTracksByArtist(artistId: string): Promise<Track[]> {
    const result = await db
      .select()
      .from(tracks)
      .where(eq(tracks.artistId, artistId))
      .orderBy(desc(tracks.createdAt));
    return result;
  }

  async getAllTracksWithArtists(): Promise<TrackWithArtist[]> {
    await this.ensureSeeded();
    const result = await db
      .select()
      .from(tracks)
      .innerJoin(artists, eq(tracks.artistId, artists.id))
      .orderBy(desc(tracks.createdAt));
    
    return result.map(row => ({
      ...row.tracks,
      artist: row.artists,
    }));
  }

  async incrementTrackPlays(id: string): Promise<void> {
    await db.update(tracks)
      .set({ plays: sql`${tracks.plays} + 1` })
      .where(eq(tracks.id, id));
    
    // Update artist total plays
    const track = await this.getTrack(id);
    if (track) {
      await db.update(artists)
        .set({ totalPlays: sql`${artists.totalPlays} + 1` })
        .where(eq(artists.id, track.artistId));
    }
  }

  // Like operations
  async toggleLike(trackId: string, artistId: string): Promise<{ isLiked: boolean; likesCount: number }> {
    const existingLike = await db
      .select()
      .from(likes)
      .where(and(eq(likes.trackId, trackId), eq(likes.artistId, artistId)))
      .limit(1);

    if (existingLike.length > 0) {
      // Unlike
      await db.delete(likes)
        .where(and(eq(likes.trackId, trackId), eq(likes.artistId, artistId)));
      await db.update(tracks)
        .set({ likes: sql`${tracks.likes} - 1` })
        .where(eq(tracks.id, trackId));
    } else {
      // Like
      await db.insert(likes).values({ trackId, artistId });
      await db.update(tracks)
        .set({ likes: sql`${tracks.likes} + 1` })
        .where(eq(tracks.id, trackId));
    }

    const likesCount = await this.getLikesCount(trackId);
    return { isLiked: existingLike.length === 0, likesCount };
  }

  async getLikesCount(trackId: string): Promise<number> {
    const result = await db
      .select({ count: sql<number>`count(*)` })
      .from(likes)
      .where(eq(likes.trackId, trackId));
    return Number(result[0]?.count) || 0;
  }

  async isTrackLiked(trackId: string, artistId: string): Promise<boolean> {
    const result = await db
      .select()
      .from(likes)
      .where(and(eq(likes.trackId, trackId), eq(likes.artistId, artistId)))
      .limit(1);
    return result.length > 0;
  }

  // Comment operations
  async createComment(comment: InsertComment): Promise<Comment> {
    const [newComment] = await db.insert(comments).values(comment).returning();
    return newComment;
  }

  async getCommentsByTrack(trackId: string): Promise<CommentWithArtist[]> {
    const result = await db
      .select()
      .from(comments)
      .innerJoin(artists, eq(comments.artistId, artists.id))
      .where(eq(comments.trackId, trackId))
      .orderBy(desc(comments.createdAt));
    
    return result.map(row => ({
      ...row.comments,
      artist: row.artists,
    }));
  }

  async deleteComment(id: string, artistId: string): Promise<boolean> {
    const result = await db
      .delete(comments)
      .where(and(eq(comments.id, id), eq(comments.artistId, artistId)));
    return (result.rowCount || 0) > 0;
  }

  async getRecentTracks(limit = 6): Promise<TrackWithArtist[]> {
    const result = await db
      .select()
      .from(tracks)
      .innerJoin(artists, eq(tracks.artistId, artists.id))
      .orderBy(desc(tracks.createdAt))
      .limit(limit);
    
    return result.map(row => ({
      ...row.tracks,
      artist: row.artists,
    }));
  }

  async getPopularTracks(limit = 10): Promise<TrackWithArtist[]> {
    const result = await db
      .select()
      .from(tracks)
      .innerJoin(artists, eq(tracks.artistId, artists.id))
      .orderBy(desc(tracks.plays))
      .limit(limit);
    
    return result.map(row => ({
      ...row.tracks,
      artist: row.artists,
    }));
  }
}

export const storage = new DatabaseStorage();
