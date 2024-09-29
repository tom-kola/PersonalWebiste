import { Link } from "react-router-dom";

import NavBtn from "./NavBtn";

const Footer = () => {
	return (
		<>
			<footer>
				<a id="web--title">tom.kola</a>
				<ul>
					<NavBtn
						path={"/"}
						whileHover={{ scale: 1.1 }}
						transition={{
							type: "spring",
							duration: 0.2,
							stiffness: 300,
						}}
					>
						Home
					</NavBtn>
					<NavBtn
						path={"about"}
						whileHover={{ scale: 1.1 }}
						transition={{
							type: "spring",
							duration: 0.2,
							stiffness: 300,
						}}
					>
						About
					</NavBtn>
					<NavBtn
						path={"contact"}
						whileHover={{ scale: 1.1 }}
						transition={{
							type: "spring",
							duration: 0.2,
							stiffness: 300,
						}}
					>
						Contact
					</NavBtn>
				</ul>
				<Link to="privacy">
					<p id="copy">Privacy policy</p>
				</Link>
				<p id="copy">
					&copy; 2023 Tomasz Kołaczyński. All rights reserved.
				</p>
			</footer>
		</>
	);
};
export default Footer;
