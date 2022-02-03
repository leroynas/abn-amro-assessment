import { get } from '../fetch';

export type Show = {
  id: number;
  name: string;
  summary: string;
  genres: string[];
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
