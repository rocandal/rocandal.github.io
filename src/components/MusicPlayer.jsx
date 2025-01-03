import '../style/music.css';
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
      audioRef.current.play().catch((err) => {
        console.error('수동 재생 에러: ', err);
      });
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
    // 트랙 변경 시 오디오 소스 설정
    audioRef.current.src = tracks[currentTrack].src;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error('자동 재생 에러: ', err);
      });
    } else {
      audioRef.current.pause();
    }

    // 노래 종료 시 다음 곡으로 변경
    const handleTrackEnd = () => {
      setCurrentTrack((curTrack) => (curTrack + 1) % tracks.length);
      setIsPlaying(true);
    };

    audioRef.current.addEventListener('ended', handleTrackEnd);

    return () => {
      audioRef.current.removeEventListener('ended', handleTrackEnd);
    };
  }, [currentTrack, isPlaying, tracks]);

  return (
    <div className="music_player">
      <div className="music_button_container">
        <button onClick={handlePrevious}>
          <img src="img/previous.png" alt="이전 음악" />
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? (
            <img src="img/pause.png" alt="일시 정지" />
          ) : (
            <img src="img/play.png" alt="음악 재생" />
          )}
        </button>
        <button onClick={handleNext}><img src="img/next.png" alt="다음 음악" /></button>
      </div>
      <div className="music_inform_container">
        <div className="music_title">
          <span>
            {isPlaying ? tracks[currentTrack].title : '재생 버튼을 눌러주세요.'}
          </span>
          <span>
            {isPlaying ? tracks[currentTrack].title : '재생 버튼을 눌러주세요.'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
