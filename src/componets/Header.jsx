import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Header = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/', {
			replace: true,
		});
	};

    const Back = () => {
		navigate('/list', {
			replace: true,
            state: {
				logged: true,
			},
		});
	};

	return (
		<>
			<header>
                <h2>Rick and Morty App</h2>
				{state?.logged ? (
					<div className="user">
                    <p>{state?.name}</p>
                    <a id="back" onClick={Back}>Regresar</a>
                    <a onClick={onLogout}>Salir</a>
                  </div>
				) : (
					""
				)}
			</header>

			<Outlet />
		</>
	);
};