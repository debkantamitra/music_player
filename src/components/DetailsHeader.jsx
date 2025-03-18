import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center">
          <img
            src={songData?.images?.coverArt}
            alt="art"
            className="w-28 h-28 sm:w-48 sm:h-48 rounded-full border-2 object-cover"
          />

          <div className="ml-5">
            <p className="text-white font-bold sm:text-3xl text-xl">
              {songData?.title}
            </p>

            <Link to={`/artists/{}`}>
              <p className="text-gray-400 mt-2">{songData?.artist}</p>
            </Link>

            <p className="text-gray-400 mt-2">{songData?.genres?.primary}</p>
          </div>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
