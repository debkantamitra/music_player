import React from "react";
import { useGetArtistDetailsByIdQuery } from "../redux/services/shazamCore";
import { Link } from "react-router-dom";

const SwiperSlideArtist = ({ song }) => {
  const { data } = useGetArtistDetailsByIdQuery({
    id: song?.relationships?.artists?.data?.[0]?.id,
  });

  return (
    <Link to={`/artists/${song?.relationships?.artists?.data?.[0]?.id}`}>
      <img
        src={song?.attributes?.artwork?.url}
        alt="artist"
        className="rounded-full object-cover w-full"
      />
    </Link>
  );
};

export default SwiperSlideArtist;
