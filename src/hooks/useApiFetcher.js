import { useEffect, useState } from "react";
/**
 * 
 * @param {string} subUrl the suburl of the api, for example "games" 
 * @param {string} auth the auth of the user, this is needed for some endpoints, (optional if not needed)
 * @description simple fetcher, it is spceialized for the dedicated api (fullUrl) and will not work for other urls, it has a trigger function to manually refetch.
 * @returns {object} object with diffrent states.
 */
const useApiFetcher = (subUrl, auth) => {
  //states
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //the finished url
  const fullUrl = import.meta.env.VITE_BASE_URL + subUrl;

  //options for fetch
  const method = "GET";
  const options = {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
    },
  };
  //if auth is true, add to header
  if (auth) {
    options.headers.Authorization = "Bearer " + auth;
  }

  //the fetcher function
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
  //it triggers when suburl changes
  useEffect(() => {
    fetcher();
  }, [subUrl]);
  //the trigger function for manual triggering
  const trigger = () => {
    fetcher();
  };
  return { data, isLoading, error, trigger };
};

export default useApiFetcher;
