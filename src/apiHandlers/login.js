import useApiFetcher from "../hooks/useApiFetcher";
const login = async (email, password) => {
  const { data, isLoading, isError } = useApiFetcher("users/login", {
    email,
    password,
  });
  return { data, isLoading, isError };
};

export default login;
