import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@pages/Home';
import '@styles/components/index.scss';
import './main.scss';
import Navbar from './layouts/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import { About } from '@pages/About';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/About' element={<About />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
