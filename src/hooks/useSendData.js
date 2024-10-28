/**
 *
 * @returns {function} the function sender, a reusable fetcher for posting, updating or deleting
 */
const useSendData = () => {
	/**
	 *
	 * @param {string} subUrl the sub url of the api
	 * @param {string} method "POST", "UPDATE", "DELETE" the method to use
	 * @param {object} body the data you want to send to the api
	 * @param {*} auth authentication is needed, except for profile creation
	 * @description a simple api fetcher function to send data
	 * @returns result from api
	 */
	const sender = async (subUrl, method, body, auth) => {
		//the full url to fetch to
		const fullUrl = import.meta.env.VITE_BASE_URL + subUrl;

		//options
		const options = {
			method: method,
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(body),
		};
		//adds auth if it excists
		if (auth) {
			options.headers.Authorization = 'Bearer ' + auth;
		}

		//try catch block to send data, returns response, in form of error or data.
		try {
			const response = await fetch(fullUrl, options);
			const result = await response.json();
			return result;
		} catch (formattedError) {
			return formattedError;
		}
	};
	return {sender};
};
export default useSendData;
