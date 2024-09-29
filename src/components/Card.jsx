import { motion } from "framer-motion";

const Card = ({
	buttonContent,
	whileHover,
	initial,
	showModal
}) => {
	return (
		<>
			<motion.div
				whileHover={whileHover}
				initial={initial}
				className="card"
			>
				<button onClick={showModal}>
					<a>{buttonContent}</a>
				</button>
			</motion.div>
		</>
	);
};
export default Card;
