import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBtn = ({ children, path, onClose, whileHover, transition }) => {
	return (
		<>
			<motion.li whileHover={whileHover} transition={transition}>
				<NavLink onClick={onClose} to={path}>
					{children}
				</NavLink>
			</motion.li>
		</>
	);
};
export default NavBtn;
