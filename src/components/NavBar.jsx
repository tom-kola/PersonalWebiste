import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavBtn from "./NavBtn";

const NavBar = ({ showModal, onSelect, ref }) => {
	return (
		<>
			<nav>
				<Link to="">
					<h1 id="web--title">tom.kola</h1>
				</Link>

				<ul>
					<NavBtn onClick={onSelect} path={""}>
						Home
					</NavBtn>
					<NavBtn onClick={onSelect} path={"about"}>
						About
					</NavBtn>
					<NavBtn onClick={onSelect} path={"contact"}>
						Contact
					</NavBtn>
				</ul>
				<FontAwesomeIcon icon={faBars} onClick={showModal} />
			</nav>
		</>
	);
};
export default NavBar;
