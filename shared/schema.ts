import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const artists = pgTable("artists", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  username: text("username").notNull().unique(),
  bio: text("bio"),
  genre: text("genre"),
  avatar: text("avatar"),
  coverImage: text("cover_image"),
  followers: integer("followers").default(0),
  totalPlays: integer("total_plays").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tracks = pgTable("tracks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  genre: text("genre"),
  duration: integer("duration"), // in seconds
  filename: text("filename").notNull(),
  fileUrl: text("file_url").notNull(),
  artwork: text("artwork"),
  plays: integer("plays").default(0),
  likes: integer("likes").default(0),
  artistId: varchar("artist_id").references(() => artists.id).notNull(),
  isPublic: boolean("is_public").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertArtistSchema = createInsertSchema(artists).omit({
  id: true,
  followers: true,
  totalPlays: true,
  createdAt: true,
});

export const insertTrackSchema = createInsertSchema(tracks).omit({
  id: true,
  plays: true,
  likes: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertArtist = z.infer<typeof insertArtistSchema>;
export type Artist = typeof artists.$inferSelect;
export type InsertTrack = z.infer<typeof insertTrackSchema>;
export type Track = typeof tracks.$inferSelect;

// Combined types for API responses
export type TrackWithArtist = Track & { artist: Artist };
export type ArtistWithTracks = Artist & { tracks: Track[] };
