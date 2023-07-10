import url from "../utils/baseUrl";
const useSendData = () => {
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
      const result = await response.json();
      return result;
    } catch (formattedError) {
      console.log(formattedError);
      return formattedError;
    }
  };
  return { sender };
};
export default useSendData;
