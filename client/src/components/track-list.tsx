import { type TrackWithArtist } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, MoreHorizontal } from "lucide-react";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface TrackListProps {
  tracks: TrackWithArtist[];
}

export default function TrackList({ tracks }: TrackListProps) {
  const { playTrack, currentTrack } = useAudioPlayer();
  const queryClient = useQueryClient();

  const playMutation = useMutation({
    mutationFn: (trackId: string) => apiRequest("POST", `/api/tracks/${trackId}/play`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tracks"] });
    }
  });

  const likeMutation = useMutation({
    mutationFn: (trackId: string) => apiRequest("POST", `/api/tracks/${trackId}/like`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tracks"] });
    }
  });

  const handlePlay = (track: TrackWithArtist) => {
    playTrack(track);
    playMutation.mutate(track.id);
  };

  const handleLike = (trackId: string) => {
    likeMutation.mutate(trackId);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="bg-dark-card border-gray-border overflow-hidden">
      {tracks.map((track, index) => (
        <div 
          key={track.id}
          className={`flex items-center p-4 hover:bg-dark-elevated transition-colors border-b border-gray-border last:border-b-0 ${
            currentTrack?.id === track.id ? 'bg-dark-elevated' : ''
          }`}
        >
          <div 
            className="w-8 text-gray-text text-center mr-4" 
            data-testid={`text-track-number-${track.id}`}
          >
            {index + 1}
          </div>
          
          <img 
            src={track.artwork || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=100&h=100&fit=crop"} 
            alt={track.title} 
            className="w-12 h-12 rounded-lg object-cover mr-4" 
          />
          
          <div className="flex-1 min-w-0">
            <h4 
              className="font-medium truncate" 
              data-testid={`text-track-title-${track.id}`}
            >
              {track.title}
            </h4>
            <p 
              className="text-gray-text text-sm truncate" 
              data-testid={`text-artist-name-${track.id}`}
            >
              {track.artist.name}
            </p>
          </div>
          
          <div 
            className="hidden md:block text-gray-text text-sm mr-8" 
            data-testid={`text-track-plays-${track.id}`}
          >
            {(track.plays || 0).toLocaleString()} plays
          </div>
          
          <div 
            className="text-gray-text text-sm mr-8" 
            data-testid={`text-track-duration-${track.id}`}
          >
            {track.duration ? formatDuration(track.duration) : "0:00"}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => handlePlay(track)}
              className="text-gray-text hover:text-warm-white transition-colors"
              data-testid={`button-play-track-${track.id}`}
            >
              <Play className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => handleLike(track.id)}
              className="text-gray-text hover:text-warm-white transition-colors"
              data-testid={`button-like-track-${track.id}`}
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-text hover:text-warm-white transition-colors"
              data-testid={`button-share-track-${track.id}`}
            >
              <Share2 className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-text hover:text-warm-white transition-colors"
              data-testid={`button-menu-track-${track.id}`}
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </Card>
  );
}
