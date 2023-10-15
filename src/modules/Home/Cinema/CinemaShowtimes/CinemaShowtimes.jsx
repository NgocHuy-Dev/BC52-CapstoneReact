import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCinemaShowtimes } from "../../../../apis/cinemaAPI";

export default function CinemaShowtimes({ cinemaId }) {
  // let cinemaId = "CGV";
  const { data: cinemaShowtimes = [] } = useQuery({
    queryKey: ["cinemaId", cinemaId],
    queryFn: () => getCinemaShowtimes(cinemaId),
  });
  console.log("cinemaId", cinemaShowtimes);

  //   console.log(a);
  return (
    <>
      <h1>hehe</h1>
      {cinemaShowtimes.map((item) => {
        <div>{item.tenHeThongRap}</div>;
      })}
    </>
  );
}
