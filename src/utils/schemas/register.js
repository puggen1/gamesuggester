import * as yup from 'yup';

const registerSchema = yup
	.object({
		username: yup.string().min(3, 'the username needs to be at least 3 characters').required(),
		email: yup.string().email('the email needs to be an valid email').required(),
		password: yup.string().min(8, 'the password needs to be at least 8 characters').required(),
	})
	.required();

export default registerSchema;
