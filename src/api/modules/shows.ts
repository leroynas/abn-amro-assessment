import { get } from '../fetch';

export enum SHOW_GENRES {
  DRAMA = 'Drama',
  SCIENCE_FICTION = 'Science-Fiction',
  THRILLER = 'THRILLER',
}

export type Show = {
  id: number;
  name: string;
  genres: SHOW_GENRES[];
  image: {
    medium: string;
  };
  rating: {
    average: number;
  };
};

const index = (): Promise<Show[]> => get('shows');

export default {
  index,
};
