import { useEffect, useRef } from "react";

interface WaveformProps {
  isPlaying?: boolean;
  accentColor?: "purple" | "blue";
  barCount?: number;
  className?: string;
}

export default function Waveform({ 
  isPlaying = false, 
  accentColor = "purple", 
  barCount = 15,
  className = ""
}: WaveformProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bars = container.children;
    if (isPlaying) {
      Array.from(bars).forEach((bar, index) => {
        const element = bar as HTMLElement;
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('waveform-bar');
      });
    } else {
      Array.from(bars).forEach((bar) => {
        const element = bar as HTMLElement;
        element.classList.remove('waveform-bar');
      });
    }
  }, [isPlaying]);

  const colorClass = accentColor === "purple" ? "bg-purple-accent" : "bg-blue-accent";

  return (
    <div 
      ref={containerRef}
      className={`flex items-center space-x-1 ${className}`}
      data-testid="waveform-visualization"
    >
      {Array.from({ length: barCount }).map((_, index) => (
        <div
          key={index}
          className={`w-1 ${colorClass} rounded transition-all duration-200`}
          style={{
            height: `${Math.random() * 24 + 8}px`,
          }}
        />
      ))}
    </div>
  );
}
