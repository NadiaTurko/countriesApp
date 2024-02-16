import axios from "axios";

const API = `https://restcountries.com/v3.1/all`;
const country = {
  get: () => axios(API).then(({ data }) => data),
  delete: (payload) =>
    axios.delete(API + `/${payload}`).then(({ data }) => data),
  patch: (name, payload) =>
    axios
      .patch(API + `/${name}`, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then(({ data }) => data),
  post: (payload) => axios.post(API, payload).then(({ data }) => data),
};

export default country;
