import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import React from 'react';
import {style} from '../login/style';
import UserAction from '../UserAction';
import {ModalContext} from '../../../context/Modal';
import {useContext, useState} from 'react';
import {FormButton} from '../../Button';
import {InputForm} from '../style';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import registerSchema from '../../../utils/schemas/register';
import TextInput from '../../UserInput/TextInput';
import {UserContext} from '../../../context/User';
const Register = React.forwardRef(({handleModalFunction}, ref) => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({resolver: yupResolver(registerSchema)});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const {registerUser, responseStatus} = useContext(UserContext);
	const {setModalStatus, setModal} = useContext(ModalContext);

	const registerAction = async (data) => {
		setIsLoading(true);
		let response = await registerUser(data, setModal);
		if (response.status) {
			setError('');
			setIsLoading(false);
			setModalStatus(false);
		} else {
			setError(response.message);
			setIsLoading(false);
		}
	};
	console.log(error);
	return (
		<Box
    ref={ref}
    sx={style}
		>
			<UserAction handleModalFunction={handleModalFunction} />

			<InputForm onSubmit={handleSubmit(registerAction)}>
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
    autocomplete="username"
    error={errors?.username}
    formControll={register('username')}
    label="username"
    name="username"
    responseStatus={responseStatus || errors?.username}
    type="username"
				/>

				<TextInput
    error={errors?.password}
    formControll={register('password')}
    label="password"
    name="new-password"
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
    text="Register"
    type="submit"
				/>
			</InputForm>
		</Box>
	);
});

export default Register;
