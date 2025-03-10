import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useState } from "react";

const Discover = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

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
        {selectedGenre ? (
          Array.from({ length: 10 }, (_, i) => i + 1).map((song) => (
            <SongCard key={song} song={song} />
          ))
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default Discover;
