import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/slice/playerSlice";
import { useGetSongDetailsByIdQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetSongDetailsByIdQuery({ id: songid });
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const lyrics = data?.resources?.lyrics;
  const lyricsText = lyrics
    ? lyrics[Object.keys(lyrics)?.[0]]?.attributes?.text
    : [];

  return (
    <div className="flex flex-col xl:w-[60%]">
      <DetailsHeader
        songData={
          data?.resources?.["shazam-songs"]?.[data?.data?.[0]?.id]?.attributes
        }
      />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {lyricsText?.length > 0 ? (
            lyricsText?.map((item, index) => {
              return (
                <p key={index} className="text-gray-400 my-1">
                  {item}
                </p>
              );
            })
          ) : (
            <p>Sorry, no lyrics found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
