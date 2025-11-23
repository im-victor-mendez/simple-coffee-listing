import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@pages/Home';
import '@styles/components/index.scss';
import './main.scss';
import Navbar from './layouts/Navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Navbar />
		<Home />
	</React.StrictMode>
);
