import { useState } from "react";
import url from "../utils/baseUrl";
const useSendData = () => {
  //make more similar to useapi fetcher?
  const [result, setResult] = useState({});
  const sender = async (subUrl, method, body, auth) => {
    const fullUrl = url + subUrl;
    const options = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    };
    if (auth) {
      options.headers.Authorization = "Bearer " + auth;
    }
    try {
      const response = await fetch(fullUrl, options);
      setResult(await response.json());
    } catch (formattedError) {
      setResult(formattedError);
    }
    return result;
  };
  return { sender };
};
export default useSendData;
