import * as yup from 'yup';

const addGameSchema = yup.object({
	title: yup.string().required(),
	url: yup.string().url().required(),
});

export default addGameSchema;
