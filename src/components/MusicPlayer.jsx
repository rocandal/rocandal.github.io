const MusicPlayer = () => {
  return (
    <div className="music_player">
      <div className="music_button_container">
        <button>&lt;</button>
        <button>▶️</button>
        <button>⏸︎</button>
        <button>&gt;</button>
      </div>
      <div className="music_inform_container">
        <span> · </span>
        <span>Spoken Without End</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
