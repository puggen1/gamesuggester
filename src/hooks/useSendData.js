const useSendData = () => {
  const sender = async (subUrl, method, body, auth) => {
    const fullUrl = import.meta.env.VITE_BASE_URL + subUrl;
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
      const result = await response.json();
      return result;
    } catch (formattedError) {
      return formattedError;
    }
  };
  return { sender };
};
export default useSendData;
