import React from "react";
import { Asset } from "expo-asset";


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
  const [isPlaying, setIsPlaying] = React.useState(false);
  const sound = React.useRef<HTMLAudioElement | null>(null);
  
  const loadAudio = async () => {
    console.log("Loading audio...");
    try {
      const audioAsset = Asset.fromModule(require("@/assets/genius_bgtrack_1.mp3"));
      await audioAsset.downloadAsync();
      
      if (!sound.current) {
        sound.current = new Audio(audioAsset.uri);
        sound.current.volume = 0.7; // Adjust volume as needed
        sound.current.loop = true;
      }
    } catch (error) {
      console.error("Error loading audio:", error);
    }
  };

  const toggleSound = () => {
    if (sound.current) {
      if (isPlaying) {
        sound.current.pause();
      } else {
        sound.current.play();
      }
    }
    setIsPlaying((prev) => !prev);
  };

  React.useEffect(() => {
    loadAudio();

    return () => {
      if (sound.current) {
        sound.current.pause();
        sound.current = null;
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