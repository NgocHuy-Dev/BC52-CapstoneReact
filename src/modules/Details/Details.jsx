import React from "react";
import { useParams } from "react-router-dom";
import MovieProfile from "./MovieProfile";
import Showtimes from "./Showtimes";
import styled from "./details.module.css";

export default function Details() {
  const { movieId } = useParams();

  return (
    <div className={styled.bg}>
      <MovieProfile movieId={movieId} />
      <Showtimes movieId={movieId} />
    </div>
  );
}
