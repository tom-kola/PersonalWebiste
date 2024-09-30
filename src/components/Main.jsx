import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import Card from "./Card";
import Modal from "./Modal";

import { CARDS_DATA, PROJECT_DETAILS, PROJECT_TITLES } from "../data-pl";

const Main = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState();
	

	let modalContent;

	if (selectedProject) {
		modalContent = (
			<>
				<div className="modal__nav">
					<h2>
						{PROJECT_DETAILS[selectedProject].title}
						<span>
							{PROJECT_DETAILS[selectedProject].spanTitle}
						</span>
					</h2>
					<p>
						<FontAwesomeIcon
							icon={faRectangleXmark}
							onClick={() => setShowModal(false)}
						/>
					</p>
				</div>
				<div className="modal__main">
					<div className="modal__pictures">
						<div
							style={{
								backgroundImage: `url(${PROJECT_DETAILS[selectedProject].image1})`,
							}}
						></div>
						<div
							style={{
								backgroundImage: `url(${PROJECT_DETAILS[selectedProject].image2})`,
							}}
						></div>
					</div>
					<div className="modal__text">
						<h4>{PROJECT_TITLES.descriptionTitle}</h4>
						<p>{PROJECT_DETAILS[selectedProject].description}</p>
						<h4>{PROJECT_TITLES.featuresTitle}</h4>
						<ul className="modal__text--features">
							<li>{PROJECT_DETAILS[selectedProject].feature1}</li>
							<li>{PROJECT_DETAILS[selectedProject].feature2}</li>
							<li>{PROJECT_DETAILS[selectedProject].feature3}</li>
							<li>{PROJECT_DETAILS[selectedProject].feature4}</li>
						</ul>
						<h4>{PROJECT_TITLES.technologiesTitle}</h4>
						<ul className="modal__text--technologies">
							<li>{PROJECT_DETAILS[selectedProject].tech1}</li>
							<li>{PROJECT_DETAILS[selectedProject].tech2}</li>
							<li>{PROJECT_DETAILS[selectedProject].tech3}</li>
							<li>{PROJECT_DETAILS[selectedProject].tech4}</li>
							<li>{PROJECT_DETAILS[selectedProject].tech5}</li>
						</ul>
						<div className="modal__text--buttons">
							<ul>
								<li>
									<Link
										to={
											PROJECT_DETAILS[selectedProject]
												.repo
										}
									>
										{PROJECT_TITLES.btn1}
									</Link>
								</li>
								<li id={selectedProject === "card3" ? "unvisible" : ""}>
									<Link
										to={
											PROJECT_DETAILS[selectedProject]
												.website
										}
									>
										{PROJECT_TITLES.btn2}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</>
		);
	}
	const handleSelect = (card, show) => {
		setSelectedProject(card);
		setShowModal(show);
	};
	return (
		<>
			<section className="projects">
				<h2>
					Selected <span>projects</span>
				</h2>
				<div className="cards">
					<Card
						whileHover={{ scale: 0.95, opacity:1 }}
						initial={{ scale: 0.9, opacity:0.7 }}
						{...CARDS_DATA["card1"]}
						showModal={() => handleSelect("card1", !showModal)}
					/>
					<Card
						whileHover={{ scale: 1.05, opacity:1 }}
						initial={{ opacity: 0.8, opacity:0.7 }}
						showModal={() => handleSelect("card2", !showModal)}
						{...CARDS_DATA["card2"]}
					/>
					<Card
						whileHover={{ scale: 0.95, opacity:1 }}
						initial={{ scale: 0.9, opacity: 0.7}}
						{...CARDS_DATA["card3"]}
						showModal={() => handleSelect("card3", !showModal)}
					/>

					<Modal
						show={showModal}
						closeModal={() => setShowModal(false)}
						showPicture={() => handleZoom(!showPicture)}
					>
						{modalContent}
					</Modal>
				</div>
			</section>
		</>
	);
};
export default Main;
