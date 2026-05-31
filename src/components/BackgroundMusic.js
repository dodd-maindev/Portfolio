import React, { useState, useEffect, useRef } from "react";
import backgroundMusic from "../assets/PastLives-Dots-7036039.mp3";

/**
 * BackgroundMusic component for audio playback and user prompt controls.
 * @returns {JSX.Element} The rendered music player controls and modal.
 */
export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const el = audioRef.current;
    const play = async () => {
      try {
        if (el) { el.volume = 0.3; await el.play(); setIsPlaying(true); setUserInteracted(true); }
      } catch (err) { setShowPlayPrompt(true); }
    };
    play();

    const interact = async () => {
      if (userInteracted || !el) return;
      try { await el.play(); setIsPlaying(true); setUserInteracted(true); setShowPlayPrompt(false); } catch (e) {}
    };

    const events = ["click", "touchstart", "keydown", "scroll"];
    events.forEach(ev => document.addEventListener(ev, interact, { once: true }));
    return () => {
      if (el) el.pause();
      events.forEach(ev => document.removeEventListener(ev, interact));
    };
  }, [userInteracted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => { setIsPlaying(true); setUserInteracted(true); setShowPlayPrompt(false); });
    }
  };

  const handlePlayPromptClick = () => {
    if (!audioRef.current) return;
    audioRef.current.play().then(() => { setIsPlaying(true); setUserInteracted(true); setShowPlayPrompt(false); });
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" muted={isMuted}>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>

      {showPlayPrompt && (
        <div className="play-prompt-overlay">
          <div className="play-prompt">
            <div className="play-prompt-content">
              <h3>🎵 Welcome!</h3>
              <p>Click to enable background music for better experience</p>
              <button className="play-prompt-btn" onClick={handlePlayPromptClick}>▶️ Play Music</button>
              <button className="play-prompt-btn secondary" onClick={() => setShowPlayPrompt(false)}>
                Continue without music
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="music-controls">
        <button className="music-btn" onClick={toggleMusic}>{isPlaying ? "⏸️" : "▶️"}</button>
        <button className="music-btn" onClick={() => {
          if (!audioRef.current) return;
          audioRef.current.muted = !isMuted;
          setIsMuted(!isMuted);
        }}>{isMuted ? "🔇" : "🔊"}</button>
      </div>
    </>
  );
};
