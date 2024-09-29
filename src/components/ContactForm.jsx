import { useRef, useState } from "react";
import { EMAILJS_KEY, EMAILJS_SERVICE, EMAILJS_TEMPLATE } from '../../config-js';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef();
	const [status, setStatus] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				EMAILJS_SERVICE,
				EMAILJS_TEMPLATE,
				form.current,
				EMAILJS_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setStatus("Message was sent!");
					setTimeout(() => {
						setStatus(status);
					}, 2500);
				},
				(error) => {
					console.log(error.text);
					setStatus("Ops. Refresh the page and try again!");
					setTimeout(() => {
						setStatus(status);
					}, 2500);
				}
			);
		e.target.reset();
	};

	return (
		<>
			<form ref={form} onSubmit={sendEmail}>
				<label>Your email:</label>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="Your email..."
					required
				/>
				<label>Your message:</label>
				<textarea
					name="msg"
					id="msg"
					placeholder="Your message..."
					required
				></textarea>
				<button type="submit">Send</button>
			</form>
			<p id="msg-status">{status}</p>
		</>
	);
};
export default ContactForm;
