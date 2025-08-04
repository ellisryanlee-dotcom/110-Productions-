import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { type TrackWithArtist } from "@shared/schema";

interface AudioPlayerProps {
  track: TrackWithArtist | null;
  onPlay?: () => void;
  onPause?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onEnded?: () => void;
  volume?: number;
  autoPlay?: boolean;
}

export interface AudioPlayerRef {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
}

const AudioPlayer = forwardRef<AudioPlayerRef, AudioPlayerProps>(({
  track,
  onPlay,
  onPause,
  onTimeUpdate,
  onEnded,
  volume = 1,
  autoPlay = false
}, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current?.play();
    },
    pause: () => {
      audioRef.current?.pause();
    },
    seek: (time: number) => {
      if (audioRef.current) {
        audioRef.current.currentTime = time;
      }
    },
    getCurrentTime: () => {
      return audioRef.current?.currentTime || 0;
    },
    getDuration: () => {
      return audioRef.current?.duration || 0;
    }
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => onPlay?.();
    const handlePause = () => onPause?.();
    const handleTimeUpdate = () => {
      if (onTimeUpdate) {
        onTimeUpdate(audio.currentTime, audio.duration);
      }
    };
    const handleEnded = () => onEnded?.();

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onPlay, onPause, onTimeUpdate, onEnded]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  if (!track) return null;

  return (
    <audio
      ref={audioRef}
      src={track.fileUrl}
      preload="metadata"
      autoPlay={autoPlay}
      data-testid="audio-player"
    />
  );
});

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
