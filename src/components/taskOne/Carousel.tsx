/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchEpisodes } from "../../Redux/breakingBadSlice";
import { loaded } from "../../Redux/loaderSlice";
import CarouselSlide from "./CarouselSlide";
import Loader from "../Loader";

const Carousel: React.FC = () => {
  const episodesStatus = useAppSelector((state) => state.breakingBad.status);
  const error = useAppSelector((state) => state.breakingBad.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (episodesStatus === "idle") {
      dispatch(fetchEpisodes());
    }
    if (episodesStatus === "succeeded" || episodesStatus === "failed") {
      dispatch(loaded());
    }
  }, [episodesStatus, dispatch]);

  return (
    <div>
      {episodesStatus === "failed" ? (
        <div>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            Something went wrong
          </h1>
          {error}
        </div>
      ) : episodesStatus === "loading" ? (
        <Loader />
      ) : (
        <CarouselSlide />
      )}
    </div>
  );
};

export default Carousel;
