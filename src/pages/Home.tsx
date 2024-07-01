import BackgroundCafe from '@assets/images/bg-cafe.jpg';
import { useEffect, useState } from 'react';
import { getCoffeeList } from '../api/api';
import { Coffee } from '@interfaces/coffee';
import { CoffeeComponent } from '@components/Coffee';
import { Filter } from '@interfaces/filter';

/**
 * **Home**
 *
 * Home page to display Coffee list.
 *
 * @returns JSX.Element
 */
function Home() {
	const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);
	const [filter, setFilter] = useState<Filter>(Filter.All);

	useEffect(() => {
		handleCoffeeData();
	}, []);

	/**
	 * **List Mapping**
	 *
	 * Maps state list into `CoffeeComponent`.
	 */
	const listMapping = coffeeList.filter(filterCoffee()).map(mapCoffee());

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
					<button onClick={() => setFilter(Filter.All)}>All Products</button>
					<button onClick={() => setFilter(Filter.AvailableNow)}>
						Available Now
					</button>
				</div>
				<div id='list'>{listMapping}</div>
			</main>
		</>
	);

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
	 * **Filter Coffee**
	 *
	 * Filter `coffeeList` state by `filter` state value.
	 *
	 * @returns unknown
	 */
	function filterCoffee(): (
		value: Coffee,
		index: number,
		array: Coffee[]
	) => unknown {
		return coffee =>
			filter == Filter.AvailableNow ? coffee.available == true : coffee;
	}

	/**
	 * **Map Coffee**
	 *
	 * Return `CoffeeComponent` into `listMapping` handler to display coffee list.
	 *
	 * @returns JSX.Element
	 */
	function mapCoffee(): (
		value: Coffee,
		index: number,
		array: Coffee[]
	) => JSX.Element {
		return (coffee: Coffee, index: number): JSX.Element => (
			<CoffeeComponent coffee={coffee} key={`coffee-${index}`} />
		);
	}
}

export { Home };
