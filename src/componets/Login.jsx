import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';

export const Login = () => {
	const navigate = useNavigate();
    

	const { name, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			password: '',
		});

	const onLogin = e => {
		e.preventDefault();

		navigate('/List', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});

		onResetForm();
	};

	return (
		<div className='auth-form-container'>
			<form onSubmit={onLogin}>
				<div className='login-form'>
					<label htmlFor='name'>Nombre:</label>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
					
				</div>
				<div className='login-form'>
					<label htmlFor='password'>Contraseña:</label>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
				</div>
				<button>Entrar</button>
			</form>
		</div>
	);
};