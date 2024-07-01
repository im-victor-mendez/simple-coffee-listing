import { Coffee } from '@interfaces/coffee';
import EmptyStar from '@assets/svg/Star.svg';
import StarFilled from '@assets/svg/Star_fill.svg';
import '@styles/components/Coffee.scss';

/**
 * **Coffee Component Properties**
 */
interface Props {
	/**
	 * **Coffee**
	 *
	 * Coffee entity to show all user interested data.
	 */
	coffee: Coffee;
}

/**
 * **Coffee Component**
 *
 * Displays all user interested coffee entity data.
 *
 * @param props Props
 * @returns JSX.Element
 */
function CoffeeComponent({ coffee }: Props) {
	const { available, id, image, name, popular, price, rating, votes } = coffee;

	// If votes is higher than 0 shows rating and votes, shows "No ratings" indicator otherwise

	// If available is `false` shows "Sold out" indicator

	return (
		<div className='coffee' key={`coffee-key-${id}`}>
			<Popular popular={popular} />
			<img src={image} alt={`${name} coffee image`} />
			<Information name={name} price={price} key={`coffee-information-${id}`} />
			<Bottom available={available} rating={rating} votes={votes} />
		</div>
	);
}

/**
 * **Popular Properties**
 */
interface PopularProps {
	/**
	 * **Popular**
	 */
	popular: boolean;
}

/**
 * **Popular**
 *
 * If popular is `true` displays indicator.
 *
 * @param props PopularProps
 * @returns JSX.Element
 */
function Popular({ popular }: PopularProps) {
	return popular ? <p className='popular'>Popular</p> : null;
}

/**
 * **Information Properties**
 */
interface InformationProps {
	/**
	 * **Name**
	 *
	 * Coffee name.
	 */
	name: string;

	/**
	 * **Price**
	 *
	 * Coffee price.
	 */
	price: string;
}

/**
 * **Information**
 *
 * Displays .information section element.
 *
 * @param props InformationProps
 * @returns JSX.Element
 */
function Information({ name, price }: InformationProps) {
	return (
		<section className='information'>
			<p className='name'>{name}</p>
			<p className='price'>{price}</p>
		</section>
	);
}

/**
 * **Bottom Properties**
 */
interface BottomProps {
	/**
	 * **Votes**
	 *
	 * Number of votes of the coffee.
	 */
	votes: number;

	/**
	 * **Rating**
	 *
	 * Rating of the coffee.
	 */
	rating: string | number | null;

	/**
	 * **Available**
	 *
	 * Availability of the coffee.
	 */
	available: boolean;
}

/**
 * **Bottom**
 *
 * Displays elements positioned in bottom of component.
 *
 * @param props BottomProps
 * @returns JSX.Element
 */
function Bottom({ available, rating, votes }: BottomProps) {
	/**
	 * **Image Source**
	 *
	 * If `votes` is 0, will display empty star, filled star otherwise.
	 */
	const imgSrc = votes == 0 ? EmptyStar : StarFilled;

	return (
		<section className='bottom'>
			<section className='opinion'>
				<img src={imgSrc} alt='Rating star image' />
				<Ratings />
			</section>
			<Availability />
		</section>
	);

	/**
	 * **Ratings**
	 *
	 * Display rating information.
	 *
	 * If coffee have no votes, displays indicator, rating data otherwise.
	 *
	 * @returns JSX.Element
	 */
	function Ratings() {
		if (votes == 0) return <p className='votes'>No ratings</p>;

		return (
			<div>
				<p className='rating'>
					{rating} <span className='votes'>({votes} votes)</span>
				</p>
			</div>
		);
	}

	/**
	 * **Availability**
	 *
	 * If coffee is not available will display indicator, `null` otherwise.
	 *
	 * @returns JSX.Element
	 */
	function Availability() {
		return available ? null : <p className='available'>Sold out</p>;
	}
}

export { CoffeeComponent };
