import React from "react";
import { withRouter } from "react-router-dom";
import { useAppSelector } from "../../Redux/hooks";
import Carousel from "./Carousel";
import BackButton from "../BackButton";

const CarouselContainer: React.FC = () => {
  const isLoaded = useAppSelector((state) => state.loader.isLoaded);

  return (
    <div
      style={{
        position: "relative",
        height: !isLoaded ? "100vh" : "auto",
      }}
    >
      <Carousel />
      {isLoaded && <BackButton />}
    </div>
  );
};

export default withRouter(CarouselContainer);
