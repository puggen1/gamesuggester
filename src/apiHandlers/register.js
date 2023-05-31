import useApiFetcher from "../hooks/useApiFetcher";
const register = async (email, password, username) => {
  const datatoSend = { email, password, username };
  const { data, isLoading, isError } = useApiFetcher(
    "users/create",
    datatoSend
  );
  return { data, isLoading, isError };
};

export default register;
