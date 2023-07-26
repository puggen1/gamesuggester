import { useEffect, useState } from "react";
import url from "../utils/baseUrl";
const useApiFetcher = (subUrl, auth) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fullUrl = url + subUrl;
  const method = "GET";
  const options = {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
    },
  };
  if (auth) {
    options.headers.Authorization = "Bearer " + auth;
  }
  const fetcher = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(fullUrl, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetcher();
  }, [subUrl]);
  const trigger = () => {
    fetcher();
  };
  return { data, isLoading, error, trigger };
};

export default useApiFetcher;
