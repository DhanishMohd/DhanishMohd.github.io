import axios from "axios";

const http = axios.create({
  baseURL: "https://api.nal.usda.gov/fdc/v1",
  params: {
    // Set default query parameters here
    api_key: "KfYeaB4Hk6cpoJw0o9pNNejhr6f8fPdBYGPMMpAR",
  },
});

export default http;
