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
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
      delay: 0
    });
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    
    const tryAutoPlay = async () => {
      try {
        if (audioElement) {
          audioElement.volume = 0.3;
          // Thử phát nhạc ngay lập tức
          await audioElement.play();
          setIsPlaying(true);
          setUserInteracted(true);
        }
      } catch (error) {
        console.log("Auto-play prevented, waiting for user interaction:", error);
        // Hiển thị prompt để user click
        setShowPlayPrompt(true);
      }
    };

    // Thử phát nhạc ngay khi component mount
    tryAutoPlay();

    // Listener cho user interaction đầu tiên
    const handleFirstInteraction = async () => {
      if (!userInteracted && audioElement) {
        try {
          await audioElement.play();
          setIsPlaying(true);
          setUserInteracted(true);
          setShowPlayPrompt(false);
        } catch (error) {
          console.log("Could not play audio:", error);
        }
      }
    };

    // Thêm listeners cho các sự kiện user interaction
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true });
    });

    // Cleanup
    return () => {
      if (audioElement) {
        audioElement.pause();
      }
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [userInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setUserInteracted(true);
          setShowPlayPrompt(false);
        }).catch(error => {
          console.log("Could not play audio:", error);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlayPromptClick = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setUserInteracted(true);
        setShowPlayPrompt(false);
      }).catch(error => {
        console.log("Could not play audio:", error);
      });
    }
  };

  return (
    <div className="App">
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        muted={isMuted}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Play Prompt Modal */}
      {showPlayPrompt && (
        <div className="play-prompt-overlay">
          <div className="play-prompt">
            <div className="play-prompt-content">
              <h3>🎵 Welcome!</h3>
              <p>Click to enable background music for better experience</p>
              <button className="play-prompt-btn" onClick={handlePlayPromptClick}>
                ▶️ Play Music
              </button>
              <button 
                className="play-prompt-btn secondary" 
                onClick={() => setShowPlayPrompt(false)}
              >
                Continue without music
              </button>
            </div>
          </div>
        </div>
      )}

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
      <SolarSystem />
      <Banner />
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

        /* Play Prompt Styles */
        .play-prompt-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.5s ease;
        }

        .play-prompt {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(138, 43, 226, 0.2) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          max-width: 400px;
          margin: 0 20px;
        }

        .play-prompt-content h3 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .play-prompt-content p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .play-prompt-btn {
          background: linear-gradient(135deg, rgba(138, 43, 226, 0.8) 0%, rgba(218, 112, 214, 0.8) 100%);
          border: none;
          border-radius: 25px;
          padding: 12px 24px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 5px 10px;
          display: inline-block;
          min-width: 140px;
        }

        .play-prompt-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(138, 43, 226, 0.4);
        }

        .play-prompt-btn.secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.8);
        }

        .play-prompt-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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

          .play-prompt {
            padding: 1.5rem;
            margin: 0 15px;
          }

          .play-prompt-content h3 {
            font-size: 1.3rem;
          }

          .play-prompt-btn {
            width: 100%;
            margin: 5px 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;