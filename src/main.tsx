import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@pages/Home';
import '@styles/components/index.scss';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);
