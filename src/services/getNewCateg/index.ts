import axios, { AxiosResponse } from "axios";

const getMoviesByCategory = (): Promise<AxiosResponse> => {
  const requestUrl = "https://api.tvmaze.com/search/shows?q=car";
  return axios.get(requestUrl);
};
export default getMoviesByCategory;
