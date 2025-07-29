

import { useEffect, useRef } from "react";

const useSound = (url, options = {}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = options.volume || 1.0;
    audio.load();
    audioRef.current = audio;
  }, [url]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return play;
};

export default useSound;
