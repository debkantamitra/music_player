import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useState } from "react";
import { useGetTopChartsByGenreQuery } from "../redux/services/shazamCore";
import { useSelector } from "react-redux";

const Discover = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]?.value);
  const { data, isLoading, error } = useGetTopChartsByGenreQuery({
    genre: selectedGenre,
  });

  if (isLoading) return <Loader title={"Loading songs..."} />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">
          Discover {selectedGenre?.title}
        </h2>

        <select
          className="bg-black outline-none rounded-lg text-gray-300 p-3 text-sm sm:mt-0 mt-5"
          value={selectedGenre?.value}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {selectedGenre
          ? data?.map((song, index) => (
              <SongCard
                key={song?.id}
                song={song}
                i={index}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Discover;
