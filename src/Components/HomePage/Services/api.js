import axios from "axios";
const API_BASE_URL = "https://api.deezer.com";
const API_CHART_REQUEST = "/chart";
const API_GENRES_REQUEST = "/genre";
const API_SEARCH_REQUEST = "/search";
const API_RADIO_TRACKS_REQUEST = "/radio/37151/tracks";

export const loadCharts = async () => {
  try {
    const data = await axios(`${API_CHART_REQUEST}?limit=10`);
    if (!data.data) throw Error();
    return data.data;
  } catch (err) {
    throw Error("Failed to load charts.");
  }
};

export const loadGenres = async () => {
  try {
    const data = await axios.get(API_GENRES_REQUEST);
    if (!data.data.data) throw Error();
    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres.");
  }
};

export const loadGenre = async (genreId) => {
  try {
    const [genreData, radioData] = await Promise.all([
      axios.get(`${API_GENRES_REQUEST}/${genreId}`),
      axios.get(`${API_GENRES_REQUEST}/${genreId}/radios`),
    ]);
    if (!genreData?.data || !radioData?.data) throw Error();
    const radios = radioData.data.data;
    const randomIndex = Math.floor(Math.random() * radios.length);
    const tracksData = await axios(
      radios[randomIndex].tracklist.replace(API_BASE_URL, ""),
    );
    return {
      genre: genreData.data,
      track: tracksData.data.data,
    };
  } catch (err) {
    throw Error("Failed to load genre.");
  }
};

export const loadRadioTracks = async () => {
  try {
    const data = await axios.get(API_RADIO_TRACKS_REQUEST);
    if (!data.data.data) throw Error();
    return data.data.data;
  } catch (err) {
    throw Error("Failed to load radio.");
  }
};

export const search = async (searchResult) => {
  try {
    const data = await axios.get(`${API_SEARCH_REQUEST}?q=${searchResult}`);
    if (!data.data.data) throw Error();
    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks.");
  }
};
