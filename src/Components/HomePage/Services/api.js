import axios from "axios";

const API_CHART_REQUEST = "/chart";
const API_REQUEST_GENRES = "/genre";

export const loadCharts = async () => {
  try {
    const data = await axios(API_CHART_REQUEST);
    if (!data.data) throw Error();
    return data.data;
  } catch (err) {
    throw Error("Failed to load charts.");
  }
};

export const loadGenres = async () => {
  try {
    const data = await axios.get(API_REQUEST_GENRES);
    if (!data.data.data) throw Error();
    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres.");
  }
};
