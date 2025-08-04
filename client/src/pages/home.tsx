import { useQuery } from "@tanstack/react-query";
import { type TrackWithArtist, type ArtistWithTracks } from "@shared/schema";
import TrackCard from "@/components/track-card";
import TrackList from "@/components/track-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Share2, Users, Music, PlayCircle } from "lucide-react";
import { useAudioPlayer } from "@/hooks/use-audio-player";

export default function Home() {
  const { data: recentTracks, isLoading: recentLoading } = useQuery<TrackWithArtist[]>({
    queryKey: ["/api/tracks/recent"],
  });

  const { data: allTracks, isLoading: allLoading } = useQuery<TrackWithArtist[]>({
    queryKey: ["/api/tracks"],
  });

  const { data: artist } = useQuery<ArtistWithTracks>({
    queryKey: ["/api/artists/username/alexrivera"],
  });

  const { playTrack } = useAudioPlayer();

  if (recentLoading || allLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-orange-accent border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-text">Loading your music...</p>
        </div>
      </div>
    );
  }

  const handlePlayAll = () => {
    if (recentTracks && recentTracks.length > 0) {
      playTrack(recentTracks[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Artist Profile Section */}
      {artist && (
        <section className="relative mb-12">
          {/* Cover Image */}
          <div className="h-64 md:h-80 bg-gradient-to-r from-purple-900 to-blue-900 relative overflow-hidden rounded-xl">
            <img 
              src={artist.coverImage || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=600&fit=crop"} 
              alt="Artist cover" 
              className="w-full h-full object-cover opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
          </div>
          
          <div className="relative -mt-20 flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
            {/* Artist Avatar */}
            <img 
              src={artist.avatar || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"} 
              alt={artist.name} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-dark-bg shadow-2xl object-cover" 
            />
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-2" data-testid="text-artist-name">{artist.name}</h1>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {artist.genre && <Badge variant="secondary">{artist.genre}</Badge>}
                <Badge variant="outline">Producer</Badge>
                <Badge variant="outline">DJ</Badge>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-text">
                <div className="flex items-center space-x-1">
                  <PlayCircle className="w-4 h-4 text-orange-accent" />
                  <span data-testid="text-total-plays">{artist.totalPlays?.toLocaleString()} plays</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-teal-accent" />
                  <span data-testid="text-followers">{artist.followers?.toLocaleString()} followers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Music className="w-4 h-4 text-orange-accent" />
                  <span data-testid="text-track-count">{artist.tracks?.length || 0} tracks</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={handlePlayAll}
                  className="bg-orange-accent hover:bg-orange-600" 
                  data-testid="button-play-all"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Play All
                </Button>
                <Button variant="secondary" data-testid="button-follow">
                  <Heart className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button variant="secondary" data-testid="button-share">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Uploads Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Uploads</h2>
          <Button variant="ghost" className="text-orange-accent hover:text-orange-400">
            View All
          </Button>
        </div>
        
        {recentTracks && recentTracks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTracks.map(track => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        ) : (
          <Card className="bg-dark-card border-gray-border">
            <CardContent className="pt-6 text-center">
              <Music className="w-12 h-12 text-gray-text mx-auto mb-4" />
              <p className="text-gray-text">No tracks uploaded yet</p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* All Tracks Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">All Tracks</h2>
          <div className="flex items-center space-x-4">
            <select className="bg-dark-card border border-gray-border rounded-lg px-4 py-2 text-warm-white focus:outline-none focus:border-orange-accent">
              <option>Recent</option>
              <option>Most Played</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
        
        {allTracks && allTracks.length > 0 ? (
          <TrackList tracks={allTracks} />
        ) : (
          <Card className="bg-dark-card border-gray-border">
            <CardContent className="pt-6 text-center">
              <Music className="w-12 h-12 text-gray-text mx-auto mb-4" />
              <p className="text-gray-text">No tracks available</p>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
