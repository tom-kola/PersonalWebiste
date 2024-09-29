import Skills from "../components/Skills";

import aboutImg from "../../public/about1.jpeg";

const About = () => {
	return (
		<>
			<section className="about">
				<h2>
					About <span>me</span>
				</h2>
				<div
					className="about__img"
					style={{ backgroundImage: `url(${aboutImg})` }}
				></div>
				<p>
					Hello, my name is Tomasz! I am an ambitious beginner
					frontend developer, ready to take on challenges and
					developing your skills. Behind every code that I create,
					there is a passion for functional design, aesthetic
					websites. I'm currently developing my own skills, and at the
					same time I offer the opportunity to create pages for
					others. Development is extremely important to me
					professional, that's why I follow what's new in the frontend
					world. I have internal motivation for continuous improvement
					and raising the bar. If you are looking for a creative and a
					committed programmer, ready to learn and develop in dynamic
					environment, then you are in the right place. I am convinced
					that my approach, enthusiasm and predispositions will
					convince you of the value of working with me. Welcome to to
					get acquainted with my projects and contact me. Together we
					can create something unique!
				</p>
				<Skills />
			</section>
		</>
	);
};
export default About;
