import axios from "axios";

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
