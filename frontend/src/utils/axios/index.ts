import axios from "axios";

export const url = "http://13.127.199.56:5000";

export default axios.create({
  baseURL: url,
});
