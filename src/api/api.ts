/* eslint-disable @typescript-eslint/no-explicit-any */

import { Coffee } from '@interfaces/coffee';

/**
 * **Get Coffee List**
 *
 * Fetch data from API url and converts into an array of [Coffee] entities.
 *
 * @returns Promise<Coffee[]>
 */
async function getCoffeeList(): Promise<Coffee[]> {
	const response = fetch(import.meta.env.VITE_API_URL);
	const json = (await response).json();

	const list = json.then(fromJsonArrayToCoffeeArray());
	return list;

	function fromJsonArrayToCoffeeArray() {
		return (value: any[]) => value.map(coffee => coffee as Coffee);
	}
}

export { getCoffeeList };
