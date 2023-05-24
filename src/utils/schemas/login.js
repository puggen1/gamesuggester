import * as yup from 'yup';


const loginSchema = yup.object({
    email: yup.string().email("the email needs to be an valid email").required(),
    password: yup.string().min(8, "the password needs to be at least 8 characters").required(),
}).required();

export default loginSchema;