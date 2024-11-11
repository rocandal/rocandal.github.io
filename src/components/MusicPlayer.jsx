import { useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const audioRef = useRef(new Audio(`/music/sample1.mp3`));

  const tracks = [
    { title: 'Flow Together', src: '/music/sample1.mp3' },
    {
      title: 'Close in the Distance (Instrumental)',
      src: '/music/sample2.mp3',
    },
    {
      title: 'Dynamis',
      src: '/music/sample3.mp3',
    },
  ];

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

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

  useEffect(() => {
    audioRef.current.src = tracks[currentTrack].src;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentTrack, isPlaying]);

  return (
    <div className="music_player">
      <div className="music_button_container">
        <button onClick={handlePrevious}>&lt;</button>
        <button onClick={handlePlayPause}>{isPlaying ? '⏸︎' : '▶️'}</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <div className="music_inform_container">
        <span> · </span>
        <span>{isPlaying ? tracks[currentTrack].title : ''}</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
