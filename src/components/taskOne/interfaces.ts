export interface IEpisode {
  id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: string[];
  series: string;
}

export interface ICarouselControlProps {
  onClick(): void;
}
