const SongCard = ({ song }) => {
  return (
    <div className="border border-red-400 p-6">
      {song?.attributes?.albumName}
    </div>
  );
};

export default SongCard;
