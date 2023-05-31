import { useEffect, useState } from "react";
import url from "../utils/baseUrl";
import cors from "../utils/tempCors";
const useApiFetcher = (subUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fullUrl = cors + url + subUrl;
  const method = "GET";
  const options = {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const fetcher = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(fullUrl, options);
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
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
