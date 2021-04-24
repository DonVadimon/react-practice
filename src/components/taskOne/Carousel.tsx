/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { fetchEpisodes } from "../../Redux/breakingBadSlice";
import { loaded } from "../../Redux/loaderSlice";
import CarouselSlide from "./CarouselSlide";
import fetchStatuses from "../../Redux/fetchStatuses";
import Loader from "../Loader";

const Carousel: React.FC = () => {
  const episodesStatus = useAppSelector((state) => state.breakingBad.status);
  const error = useAppSelector((state) => state.breakingBad.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (episodesStatus === fetchStatuses.idle) {
      dispatch(fetchEpisodes());
    }
    if (
      episodesStatus === fetchStatuses.succeeded ||
      episodesStatus === fetchStatuses.failed
    ) {
      dispatch(loaded());
    }
  }, [episodesStatus, dispatch]);

  return (
    <div>
      {episodesStatus === fetchStatuses.failed ? (
        <div>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            Something went wrong
          </h1>
          {error}
        </div>
      ) : episodesStatus === fetchStatuses.loading ? (
        <Loader />
      ) : (
        <CarouselSlide />
      )}
    </div>
  );
};

export default withRouter(Carousel);
