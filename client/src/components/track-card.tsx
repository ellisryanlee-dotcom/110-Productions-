import { type TrackWithArtist } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Share2, MoreHorizontal, PlayCircle } from "lucide-react";
import { useAudioPlayer } from "@/hooks/use-audio-player";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import Waveform from "./waveform";
import { TrackComments } from "./track-comments";

interface TrackCardProps {
  track: TrackWithArtist;
}

export default function TrackCard({ track }: TrackCardProps) {
  const { playTrack, currentTrack, isPlaying } = useAudioPlayer();
  const queryClient = useQueryClient();

  const isCurrentTrack = currentTrack?.id === track.id;

  const playMutation = useMutation({
    mutationFn: () => apiRequest(`/api/tracks/${track.id}/play`, { method: "POST" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tracks"] });
      queryClient.invalidateQueries({ queryKey: ["/api/tracks/recent"] });
    }
  });

  const handlePlay = () => {
    playTrack(track);
    playMutation.mutate();
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="bg-dark-card hover:bg-dark-elevated transition-colors group border-gray-border">
      <CardContent className="p-6">
        <img 
          src={track.artwork || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop"} 
          alt={track.title} 
          className="w-full h-48 object-cover rounded-lg mb-4" 
        />
        
        <h3 className="font-semibold text-lg mb-2 truncate" data-testid={`text-track-title-${track.id}`}>
          {track.title}
        </h3>
        
        {track.description && (
          <p className="text-gray-text mb-4 text-sm line-clamp-2" data-testid={`text-track-description-${track.id}`}>
            {track.description}
          </p>
        )}
        
        {/* Waveform Visualization */}
        <div className="mb-4">
          <Waveform 
            isPlaying={isCurrentTrack && isPlaying} 
            accentColor="orange" 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              size="icon"
              onClick={handlePlay}
              className="bg-orange-accent hover:bg-orange-600 w-10 h-10 rounded-full"
              data-testid={`button-play-track-${track.id}`}
            >
              <Play className="w-4 h-4" />
            </Button>
            
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-text">
                <PlayCircle className="w-4 h-4" />
                <span data-testid={`text-track-plays-${track.id}`}>
                  {(track.plays || 0).toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-gray-text" data-testid={`text-track-duration-${track.id}`}>
                {track.duration ? formatDuration(track.duration) : "0:00"}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
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

        {/* Comments and Likes Section */}
        <div className="mt-4 pt-4 border-t border-gray-border">
          <TrackComments trackId={track.id} />
        </div>
      </CardContent>
    </Card>
  );
}
