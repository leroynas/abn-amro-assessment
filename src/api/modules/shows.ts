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

export type SearchResult = {
  score: number;
  show: Show;
};

const index = (): Promise<Show[]> => {
  return get('shows');
};

const show = (id: number): Promise<Show> => {
  return get(`shows/${id}`);
};

const search = (query: string): Promise<SearchResult[]> => {
  return get(`search/shows?q=${query}`);
};

export default {
  index,
  show,
  search,
};
