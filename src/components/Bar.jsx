import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Bar = ({ show, children }) => {
	if (!show) return null;
	return createPortal(
		<>
			<motion.nav
				key="modal"
				initial={{ y: 0, x: 800 }}
				animate={{ y: 0, x: 0 }}
				exit={{ y: 0, x: 800 }}
				transition={{ duration: 0.3 }}
				className="mobile"
			>
				{children}
			</motion.nav>
		</>,
		document.getElementById("modal")
	);
};
export default Bar;
