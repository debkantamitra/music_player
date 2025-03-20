import { useDispatch, useSelector } from "react-redux";
import { setActiveSong, playPause } from "../redux/slice/playerSlice";
import SongBar from "./SongBar";

const RelatedSongs = ({ data, artistId }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, index: i }));
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className="mt-6 w-full flex flex-col">
        {/* {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            son={song}
            i={i}
            artistId={artistId}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))} */}
      </div>
    </div>
  );
};

export default RelatedSongs;
