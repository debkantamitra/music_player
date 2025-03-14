import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/slice/playerSlice";

const SongCard = ({ song, i }) => {
  const songAttr = song?.attributes;
  const activeSong = { id: 1 };
  console.log(song.id === activeSong.id);

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5
       animate-slideup rounded-lg cursor-pointer hover:scale-105"
    >
      <div className="relative h-56 w-full group">
        <div
          className={`absolute inset-0 justify-center items-center
           bg-black bg-opacity-50 group-hover:flex ${
             activeSong?.id === song?.id
               ? "flex bg-black bg-opacity-70"
               : "hidden"
           }`}
        >
          <PlayPause song={song} />
        </div>
        <img src={songAttr?.artwork?.url} alt="song-img" />
      </div>
      <div className="mt-4">
        <Link to={`/song/${song.id}`}>
          <p
            className="font-semibold text-gray-200 truncate"
            title={songAttr?.name}
          >
            {songAttr?.name}
          </p>
        </Link>

        <Link to={`/artist/${songAttr?.artistId}`}>
          <p
            className="text-sm font-semibold text-gray-300 truncate mt-1"
            title={`${songAttr?.albumName} - ${songAttr?.artistName}`}
          >
            {songAttr?.albumName} - {songAttr?.artistName}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SongCard;
