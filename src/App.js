import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Model3d} from "./components/Model3d";
import { SolarSystem } from './components/SolarSystem';
import { useState, useEffect, useRef } from 'react';
import backgroundMusic from './assets/PastLives-Dots-7036039.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Auto-play music when component mounts
    const audioElement = audioRef.current;
    
    const playMusic = async () => {
      try {
        if (audioElement) {
          audioElement.volume = 0.3; // Set volume to 30%
          await audioElement.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play prevented by browser:", error);
        // Auto-play was prevented, user needs to interact first
      }
    };

    playMusic();

    // Cleanup function
    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="App">
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Controls */}
      <div className="music-controls">
        <button 
          className="music-btn" 
          onClick={toggleMusic}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button 
          className="music-btn" 
          onClick={toggleMute}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      <Model3d />
      <NavBar />
      <Banner />
      <SolarSystem />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <style jsx>{`
        .music-controls {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          gap: 10px;
        }

        .music-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.2) 100%);
          backdrop-filter: blur(10px);
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .music-btn:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(138, 43, 226, 0.4) 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
        }

        .music-btn:active {
          transform: translateY(0);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .music-controls {
            bottom: 80px;
            right: 15px;
          }
          
          .music-btn {
            width: 45px;
            height: 45px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
