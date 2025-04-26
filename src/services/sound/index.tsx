import React from "react";
import { Audio } from "expo-av";


interface GameSoundContextType {
  isPlaying: boolean;
  toggleSound: () => void;
}

const GameSoundContext = React.createContext({} as GameSoundContextType);

export const useGameSound = () => React.useContext(GameSoundContext);

interface GameSoundProviderProps {
  children: React.ReactNode;
}

const GameSoundProvider = ({ children }: GameSoundProviderProps) => {
  const sound = React.useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const loadAudio = async () => {
    try {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        require("@/assets/genius_bgtrack_1.mp3"),
        {
          isLooping: true,
          shouldPlay: false,
          volume: 0.7, // Adjust volume as needed
        }
      );
      sound.current = audioSound;
    } catch (error) {
      console.error("Error loading audio:", error);
    }
  };

  const toggleSound = () => {
    if (sound.current) {
      if (isPlaying) {
        sound.current.pauseAsync();
      } else {
        sound.current.playAsync();
      }
    }
    setIsPlaying((prev) => !prev);
  };

  React.useEffect(() => {
    loadAudio();

    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, []);

  return (
    <GameSoundContext.Provider value={{ toggleSound, isPlaying }}>
      {children}
    </GameSoundContext.Provider>
  );
}


export default GameSoundProvider;