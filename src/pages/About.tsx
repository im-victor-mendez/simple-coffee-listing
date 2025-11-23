import '@styles/pages/About.scss';
import TwentyOnePilotsLogo from '@assets/svg/Twenty One Pilots - Logo.svg';

function About() {
	return (
		<section className='page' id='about'>
			<main>
				<div id='heading'>
					<h1 id='title'>About Us</h1>
					<p id='description'>
						We are passionate about crafting and curating exceptional coffee
						experiences. Our mission is to bring unique flavors, aromas, and
						stories from coffee growers across the world directly to your cup.
					</p>
					<img id='vector' src={TwentyOnePilotsLogo} alt='Decorative Vector' />
				</div>

				<div id='content'>
					<div id='info'>
						<h2>Our Story</h2>
						<p>
							Founded with the belief that coffee is more than just a drink, our
							team works tirelessly to discover beans with personality, roast
							them with precision, and deliver them fresh to you.
						</p>

						<h2>Our Mission</h2>
						<p>
							To share high-quality, ethically sourced coffee while supporting
							small producers and offering our customers a reliable and rich
							coffee experience.
						</p>

						<h2>Our Values</h2>
						<ul>
							<li>🌱 Sustainability</li>
							<li>🤝 Fair Trade</li>
							<li>🔥 High-quality roasting</li>
							<li>📦 Fresh weekly batches</li>
							<li>💛 Passion for craftsmanship</li>
						</ul>
					</div>
				</div>
			</main>
		</section>
	);
}

export { About };
