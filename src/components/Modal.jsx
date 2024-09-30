import { createPortal } from "react-dom";

const Modal = ({ children, show, closeModal}) => {
	if (!show) return null;
	return createPortal(
		<>
			<div className="backdrop" onClick={closeModal}></div>
			<div className="modal__container">{children}</div>
		</>,
		document.getElementById("modal")
	);
};
export default Modal;
