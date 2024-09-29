import { TypeAnimation } from "react-type-animation";

import mainPhoto6 from "../../public/main-photo6.webp";

import { Link } from "react-router-dom";
const Header = () => {
	return (
		<>
			<header>
				<div className="web--shadow"></div>
				<div className="header__text">
					<h2 id="header__text--title">Hi, I'm Tomasz!</h2>
					<p>
						Welcome to the innovative world where I passionately
						create online space with you in mind.
					</p>
					<h2 id="header__text--animate">
						<TypeAnimation
							sequence={[
								"Hello World!", // Types 'One'
								5000,
								"",
							]}
							wrapper="span"
							speed={25}
							cursor={true}
							repeat={Infinity}
						/>
					</h2>
					<div className="header__text--buttons">
						<ul>
							<li>
								<Link to="https://github.com/tom-kola">
									GitHub
								</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="header__photo">
					<img src={mainPhoto6} alt="Photo with the author" />
				</div>
			</header>
		</>
	);
};
export default Header;
