export interface ICarouselProps {
  load: boolean;
  onLoad(): void;
}

export interface IEpisode {
  id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: string[];
  series: string;
}

export interface ICarouselSlideProps {
  image: string;
  episode: IEpisode;
  prevSlide(): void;
  nextSlide(): void;
}

export interface ICarouselControlProps {
  onClick(): void;
}
