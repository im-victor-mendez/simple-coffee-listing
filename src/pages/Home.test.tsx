import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home Component', () => {
	it('should contain the required texts with specific HTML tags', () => {
		render(<Home />);

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Our Collection'
		);
		expect(
			screen.getByText(
				'Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.'
			)
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'All Products' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Available Now' })
		).toBeInTheDocument();
	});

	it('should contain an image', () => {
		render(<Home />);

		expect(screen.getByRole('img')).toBeInTheDocument();
	});

	it('should contain an element with "background" id', () => {
		render(<Home />);

		const backgroundElement = document.getElementById('background');
		expect(backgroundElement).toBeInTheDocument();
	});

	it('should contain a main element', () => {
		render(<Home />);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('should contain elements with ids "heading" and "filters"', () => {
		render(<Home />);

		const headingElement = document.getElementById('heading');
		expect(headingElement).toBeInTheDocument();

		const filtersElement = document.getElementById('filters');
		expect(filtersElement).toBeInTheDocument();
	});

	it('should contain a container with "list" id', () => {
		render(<Home />);

		const listContainer = document.getElementById('list');
		expect(listContainer).toBeInTheDocument();
	});
});
