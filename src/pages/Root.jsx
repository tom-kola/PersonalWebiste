import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import Bar from "../components/Bar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBtn from "../components/NavBtn";

const RootLayout = () => {
	const [show, setShow] = useState(false);

	const handleClick = (show) => {
		setShow(show);
	};

	return (
		<>
			<NavBar showModal={() => handleClick(!show)} />
			<AnimatePresence>
				{show && (
					<Bar show={show}>
						<ul>
							<FontAwesomeIcon
								icon={faRectangleXmark}
								onClick={() => handleClick(false)}
							/>
							<NavBtn
								onClose={() => handleClick(false)}
								path={"/"}
							>
								Home
							</NavBtn>
							<NavBtn
								onClose={() => handleClick(false)}
								path={"/about"}
							>
								About
							</NavBtn>
							<NavBtn
								onClose={() => handleClick(false)}
								path={"/contact"}
							>
								Contact
							</NavBtn>
						</ul>
					</Bar>
				)}
			</AnimatePresence>
			<main>
				<Outlet />
				<ScrollRestoration />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
