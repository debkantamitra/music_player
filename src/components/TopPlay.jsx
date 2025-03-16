import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/slice/playerSlice";

import "swiper/css";
import "swiper/css/free-mode";

import { useGetTopChartsByGenreQuery } from "../redux/services/shazamCore";
import SwiperSlideArtist from "./SwiperSlideArtist";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  const songAttr = song?.attributes;

  return (
    <div className="flex items-center w-full hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer">
      <div className="flex justify-between flex-1">
        <img
          src={songAttr?.artwork?.url}
          alt={songAttr?.name}
          className="w-20 h-20 rounded-lg mr-1"
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link
            to={`/songs/${song.id}`}
            className="font-bold text-white text-xl"
          >
            {songAttr?.name}
          </Link>

          <Link
            to={`/artists/${song?.relationships?.artists?.data?.[0]?.id}`}
            className="text-gray-300 truncate mt-1"
          >
            {songAttr?.artistName}
          </Link>
        </div>
      </div>

      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

const TopPlay = ({ selectedGenre }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsByGenreQuery({
    genre: selectedGenre,
  });
  const topPlays = data?.slice(0, 5);
  const divRef = useRef(null);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(playPause(true));
    dispatch(setActiveSong({ song, data, index: i }));
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={divRef}
      className="xl:ml-6 xl:mb-0 mb-6 md:max-w-[500px] max-w-full flex flex-col overflow-y-auto"
    >
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>

          <Link to="/top-charts">
            <p className="text-gray-300 cursor-pointer">See More</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          {topPlays?.map((song, i) => {
            return (
              <TopChartCard
                key={song.id}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => {
                  handlePlayClick(song, i);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col w-full mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>

          <Link to="/top-artists">
            <p className="text-gray-300 cursor-pointer">See More</p>
          </Link>
        </div>

        <Swiper
          spaceBetween={15}
          slidesPerView={"auto"}
          modules={[FreeMode]}
          centeredSlides
          centeredSlidesBounds
          freeMode
          className="mt-4"
        >
          {topPlays?.map((song, i) => {
            return (
              <SwiperSlide
                key={song.id}
                style={{ width: "25%", height: "auto" }}
                className="shadow-lg animate-slideright rounded-full"
              >
                <SwiperSlideArtist song={song} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
