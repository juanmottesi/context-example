import axios from 'axios';

const BASE_URL = "https://to-do-list-beige-eta.vercel.app/";

const Api = {
  login: (email, password) =>
    axios
      .post(`${BASE_URL}/api/login`, { email, password })
      .then(({ data }) => data),
  getUser: (token) =>
    axios
      .get(`${BASE_URL}/api/user`, { headers: { token } })
      .then(({ data }) => data),
};

export default Api;
