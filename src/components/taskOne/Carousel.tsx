import React, { useState, useEffect } from "react";
import carouselImages from "./carouselImages";
import CarouselSlide from "./CarouselSlide";
import Loader from "../Loader";
import { ICarouselProps, IEpisode } from "./interfaces";

const Carousel: React.FC<ICarouselProps> = ({
  load,
  onLoad,
}: ICarouselProps) => {
  const [breakingBadData, setBreakingBadData] = useState<IEpisode[]>([]);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imgLength: number = carouselImages.length;
  const [currentEpisode, setCurrentEpisode] = useState<number>(0);
  const [epsLength, setEpsLength] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(load);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/episodes")
      .then((data: Response) => data.json())
      .then((data: IEpisode[]) => {
        setBreakingBadData(data);
        setEpsLength(data.length);
        setLoading(false);
        onLoad();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    setCurrentImg((prev) => (prev + 1) % imgLength);
    setCurrentEpisode((prev) => (prev + 1) % epsLength);
  };

  const prevSlide = () => {
    setCurrentImg((prev) => (prev + imgLength - 1) % imgLength);
    setCurrentEpisode((prev) => (prev + epsLength - 1) % epsLength);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <CarouselSlide
          image={carouselImages[currentImg].image}
          episode={breakingBadData[currentEpisode]}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      )}
    </div>
  );
};

export default Carousel;
