import { get } from '../fetch';

enum SHOW_GENRES {
  DRAMA = 'Drama',
  SCIENCE_FICTION = 'Science-Fiction',
  THRILLER = 'THRILLER',
}

export type Show = {
  genres: SHOW_GENRES;
};

const index = (): Promise<Show> => get('shows');

export default {
  index,
};
