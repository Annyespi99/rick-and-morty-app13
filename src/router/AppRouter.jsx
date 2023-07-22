import {Route, Routes } from 'react-router-dom';
import Character from "../componets/Character";
import {Login} from "../componets/Login";
import Inicio from "../componets/Inicio";
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/List' element={
                    <PrivateRoute>
                        <Inicio></Inicio>
                    </PrivateRoute>
                }></Route>
                <Route path='/Character/:id' element={
                    <PrivateRoute>
                        <Character></Character>
                    </PrivateRoute>
                }></Route>
              </Routes>
		</>
	);
};