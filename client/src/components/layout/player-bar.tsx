import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2, 
  Heart 
} from "lucide-react";
import { useAudioPlayer } from "@/hooks/use-audio-player";

export default function PlayerBar() {
  const { 
    currentTrack, 
    isPlaying, 
    currentTime, 
    duration, 
    volume,
    togglePlay, 
    seek, 
    setVolume 
  } = useAudioPlayer();

  if (!currentTrack) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (value: number[]) => {
    seek(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-elevated border-t border-gray-border z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Track Info */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <img 
              src={currentTrack.artwork || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop"} 
              alt={currentTrack.title} 
              className="w-14 h-14 rounded-lg object-cover" 
            />
            <div className="min-w-0 flex-1">
              <h4 className="font-medium truncate" data-testid="text-current-track-title">
                {currentTrack.title}
              </h4>
              <p className="text-gray-text text-sm truncate" data-testid="text-current-artist">
                {currentTrack.artist.name}
              </p>
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-gray-text hover:text-warm-white transition-colors"
              data-testid="button-like-current"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex items-center space-x-6">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-text hover:text-warm-white transition-colors"
                data-testid="button-shuffle"
              >
                <Shuffle className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-text hover:text-warm-white transition-colors"
                data-testid="button-previous"
              >
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                onClick={togglePlay}
                className="bg-orange-accent hover:bg-orange-600 w-12 h-12 rounded-full"
                data-testid="button-play-pause"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-text hover:text-warm-white transition-colors"
                data-testid="button-next"
              >
                <SkipForward className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gray-text hover:text-warm-white transition-colors"
                data-testid="button-repeat"
              >
                <Repeat className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center space-x-3 w-full max-w-md">
              <span className="text-sm text-gray-text min-w-[35px]" data-testid="text-current-time">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                onValueChange={handleSeek}
                className="flex-1"
                data-testid="slider-progress"
              />
              <span className="text-sm text-gray-text min-w-[35px]" data-testid="text-duration">
                {formatTime(duration)}
              </span>
            </div>
          </div>
          
          {/* Volume Control */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <Button 
              size="icon" 
              variant="ghost" 
              className="text-gray-text hover:text-warm-white transition-colors"
              data-testid="button-volume"
            >
              <Volume2 className="w-4 h-4" />
            </Button>
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              onValueChange={(value) => handleVolumeChange([value[0] / 100])}
              className="w-24"
              data-testid="slider-volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
