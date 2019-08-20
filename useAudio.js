import { useState, useEffect, useCallback } from 'react';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    setPlaying(!playing);
  }, [url, playing]);

  const stop = useCallback(() => {
    audio.pause();
    audio.currentTime = 0;
  }, [url, playing]);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  return [
    audio,
    {
      playing,
      toggle,
      stop,
    }
  ];
};

export default useAudio;