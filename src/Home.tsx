import BackgroundCafe from '@assets/images/bg-cafe.jpg';
import { useEffect, useState } from 'react';
import { getCoffeeList } from './api/api';
import { Coffee } from '@interfaces/coffee';
import { CoffeeComponent } from '@components/Coffee';

/**
 * **Home**
 *
 * Home page to display Coffee list.
 *
 * @returns JSX.Element
 */
function Home() {
	const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

	useEffect(() => {
		handleCoffeeData();
	}, []);

	/**
	 * **Handle Coffee Data**
	 *
	 * Calls `getCoffeeList` and sets data into state.
	 */
	async function handleCoffeeData() {
		const coffeeList = await getCoffeeList();
		setCoffeeList(coffeeList);
	}

	/**
	 * **List Mapping**
	 *
	 * Maps state list into `CoffeeComponent`.
	 */
	const listMapping = coffeeList.map((coffee, index) => (
		<CoffeeComponent coffee={coffee} key={`coffee-${index}`} />
	));

	return (
		<>
			<img src={BackgroundCafe} alt='Background Cafe Image' />
			<div id='background'></div>
			<main>
				<div id='heading'>
					<h1>Our Collection</h1>
					<p>
						Introducing our Coffee Collection, a selection of unique coffees
						from different roast types and origins, expertly roasted in small
						batches and shipped fresh weekly.
					</p>
				</div>
				<div id='filters'>
					<button>All Products</button>
					<button>Available Now</button>
				</div>
				<div id='list'>{listMapping}</div>
			</main>
		</>
	);
}

export { Home };
