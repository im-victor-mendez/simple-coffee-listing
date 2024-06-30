interface Coffee {
	id: number;
	name: string;
	image: string;
	price: string;
	rating: number | null | string;
	votes: number;
	popular: boolean;
	available: boolean;
}

export type { Coffee };
