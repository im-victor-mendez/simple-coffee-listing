import BackgroundCafe from '@assets/images/bg-cafe.jpg';

function Home() {
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
				<div id='list'></div>
			</main>
		</>
	);
}

export { Home };
