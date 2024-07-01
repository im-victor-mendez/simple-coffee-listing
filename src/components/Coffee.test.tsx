import { Coffee } from '@interfaces/coffee';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CoffeeComponent } from './Coffee';

const mockCoffee: Coffee = {
	id: 1,
	name: 'Espresso',
	image: 'espresso.png',
	price: '2.50',
	rating: 4.5,
	votes: 120,
	popular: true,
	available: true,
};

const mockCoffeeNoVotes: Coffee = {
	id: 2,
	name: 'Latte',
	image: 'latte.png',
	price: '3.00',
	rating: null,
	votes: 0,
	popular: false,
	available: false,
};

describe('CoffeeComponent', () => {
	it('should be an element with class "coffee"', () => {
		const { container } = render(<CoffeeComponent coffee={mockCoffee} />);

		const coffeeElement = container.getElementsByClassName('coffee');
		expect(coffeeElement.length).toBe(1);
	});

	it('should have two images', () => {
		render(<CoffeeComponent coffee={mockCoffee} />);
		const img = screen.getAllByRole('img');
		expect(img.length).toBe(2);
	});

	it('should have a "popular" element if popular is true', () => {
		render(<CoffeeComponent coffee={mockCoffee} />);
		const popular = screen.getByText('Popular');
		expect(popular).toBeInTheDocument();
		expect(popular).toHaveClass('popular');
	});

	it('should have a "name" element', () => {
		render(<CoffeeComponent coffee={mockCoffee} />);
		const name = screen.getByText(mockCoffee.name);
		expect(name).toBeInTheDocument();
		expect(name).toHaveClass('name');
	});

	it('should have a "price" element', () => {
		render(<CoffeeComponent coffee={mockCoffee} />);
		const price = screen.getByText(`$${mockCoffee.price}`);
		expect(price).toBeInTheDocument();
		expect(price).toHaveClass('price');
	});

	it('should have "rating" and "votes" elements', () => {
		render(<CoffeeComponent coffee={mockCoffee} />);

		expect(screen.getByText(`${mockCoffee.rating}`)).toBeInTheDocument();
		expect(screen.getByText(`(${mockCoffee.votes} votes)`)).toBeInTheDocument();
	});

	it('should show "No ratings" if there are no votes', () => {
		render(<CoffeeComponent coffee={mockCoffeeNoVotes} />);
		const noRatings = screen.getByText('No ratings');
		expect(noRatings).toBeInTheDocument();
	});

	it('should have a "available" element with "Sold out" text if available is false', () => {
		render(<CoffeeComponent coffee={mockCoffeeNoVotes} />);
		const notAvailable = screen.getByText('Sold out');
		expect(notAvailable).toBeInTheDocument();
		expect(notAvailable).toHaveClass('available');
	});
});
