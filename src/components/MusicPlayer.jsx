import { useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = ['Song1', 'Song2'];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handlePrevious = () => {
    setCurrentTrack((curTrack) =>
      !curTrack ? tracks.length - 1 : curTrack - 1
    );
    setIsPlaying(true);
  };
  const handleNext = () => {
    setCurrentTrack((curTrack) => (curTrack + 1) % tracks.length);
    setIsPlaying(true);
  };

  return (
    <div className="music_player">
      <div className="music_button_container">
        <button onClick={handlePrevious}>&lt;</button>
        <button onClick={handlePlayPause}>{isPlaying ? '⏸︎' : '▶️'}</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="music_inform_container">
        <span> · </span>
        <span>{currentTrack}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
