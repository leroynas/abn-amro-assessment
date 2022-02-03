const BASE_URI = 'https://api.tvmaze.com/';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const get = async (path: string): Promise<any> => {
  const response = await fetch(BASE_URI + path, { method: 'GET' });
  const data = await response.json();

  return data;
};
