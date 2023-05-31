import useApiFetcher from "../hooks/useApiFetcher";

const addGame = async (title, url, token, time) => {
  const dataToSend = {
    title,
    url,
    date: time,
  };
  const { data, isLoading, isError } = useApiFetcher(
    "games",
    dataToSend,
    token
  );
  return { data, isLoading, isError };
};

export default addGame;
