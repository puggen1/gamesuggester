import Box from '@mui/material/Box';
import React, {useState} from 'react';
import {style} from './style';
import UserAction from '../UserAction';
import {Typography} from '@mui/material';
import {InputForm} from '../style';
import {FormButton} from '../../Button';
import {UserContext} from '../../../context/User';
import {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import loginSchema from '../../../utils/schemas/login';
import TextInput from '../../UserInput/TextInput';
// eslint-disable-next-line no-unused-vars
const Login = React.forwardRef(({handleModalFunction, setModalStatus}, ref) => {
	const {loginUser, responseStatus} = useContext(UserContext);
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({resolver: yupResolver(loginSchema)});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const loginAction = async (data) => {
		setIsLoading(true);
		const response = await loginUser(data);
		if (response.status) {
			setIsLoading(false);
			setModalStatus(false);
			setError('');
		} else {
			setIsLoading(false);
			setError(response.message);
		}
	};

	return (
		<Box sx={style}>
			<UserAction handleModalFunction={handleModalFunction} />

			<InputForm onSubmit={handleSubmit(loginAction)}>
				<TextInput
    autocomplete="email"
    error={errors?.email}
    formControll={register('email')}
    label="email"
    name="email"
    responseStatus={responseStatus || errors?.email}
    type="email"
				/>

				<TextInput
    autocomplete="current-password"
    error={errors?.password}
    formControll={register('password')}
    label="password"
    name="password"
    responseStatus={responseStatus || errors?.password}
    type="password"
				/>

				<div>
					<Typography
    color="error"
    component="p"
    fontSize={12}
    padding="0px 1rem"
    variant="p"
					>
						{error ? error : ''}
					</Typography>
				</div>

				<FormButton
    isLoading={isLoading}
    text="login"
    type="submit"
				/>
			</InputForm>
		</Box>
	);
});

export default Login;
