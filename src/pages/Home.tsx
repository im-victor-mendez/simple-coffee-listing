import BackgroundCafe from '@assets/images/bg-cafe.jpg';
import { useEffect, useState } from 'react';
import { getCoffeeList } from '../api/api';
import { Coffee } from '@interfaces/coffee';
import { CoffeeComponent } from '@components/Coffee';
import { Filter } from '@interfaces/filter';
import Vector from '@assets/svg/vector.svg';
import '@styles/pages/Home.scss';

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
	const [dropdownOpen, setDropdownOpen] = useState(false);

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
		<section className='page' id='home'>
			<img id='background' src={BackgroundCafe} alt='Background Cafe Image' />
			<main>
				<div id='heading'>
					<h1 id='title'>Our Collection</h1>
					<p id='description'>
						Introducing our Coffee Collection, a selection of unique coffees
						from different roast types and origins, expertly roasted in small
						batches and shipped fresh weekly.
					</p>
					<img id='vector' src={Vector} alt='Vector svg' />
				</div>
				<div id='filters-dropdown'>
					<button
						id='dropdown-button'
						onClick={() => setDropdownOpen(!dropdownOpen)}
					>
						{getFilterLabel(filter)} ▼
					</button>

					{dropdownOpen && (
						<ul id='dropdown-menu'>
							<li onClick={() => handleFilter(Filter.All)}>All Products</li>
							<li onClick={() => handleFilter(Filter.AvailableNow)}>
								Available Now
							</li>
							<li onClick={() => handleFilter(Filter.Popular)}>Popular</li>
							<li onClick={() => handleFilter(Filter.HighRating)}>
								Rating +4.5
							</li>
						</ul>
					)}
				</div>
				<div id='list'>{listMapping}</div>
			</main>
		</section>
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
	 * **Handle Filter**
	 *
	 * Handle filter value to state.
	 *
	 * @param value Filter
	 */
	function handleFilter(value: Filter) {
		setFilter(value);
		setDropdownOpen(false);
	}

	/**
	 * **Get Filter Label**
	 *
	 * Transforms Filter enum values into readable labels.
	 *
	 * @param filter Filter
	 * @returns string
	 */
	function getFilterLabel(filter: Filter): string {
		switch (filter) {
			case Filter.AvailableNow:
				return 'Available Now';
			case Filter.Popular:
				return 'Popular';
			case Filter.HighRating:
				return 'Rating +4.5';
			default:
				return 'All Products';
		}
	}

	/**
	 * **Filter Coffee**
	 *
	 * Filter `coffeeList` state by `filter` state value.
	 *
	 * @returns boolean
	 */
	function filterCoffee(): (
		value: Coffee,
		index: number,
		array: Coffee[]
	) => boolean {
		return (coffee: Coffee) => {
			switch (filter) {
				case Filter.AvailableNow:
					return coffee.available;
				case Filter.Popular:
					return coffee.popular;
				case Filter.HighRating:
					return parseFloat(String(coffee.rating)) >= 4.5;
				default:
					return true;
			}
		};
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
