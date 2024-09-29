import { useState } from "react";

import ContactForm from "../components/ContactForm";

const Contact = () => {
	const [copySuccess, setCopySuccess] = useState(
		"kolaczynski.tomasz@gmail.com"
	);

	const copyToClipBoard = async (copyMe) => {
		try {
			await navigator.clipboard.writeText(copyMe);
			setCopySuccess("Skopiowano do schowka!");
			setTimeout(() => {
				setCopySuccess("kolaczynski.tomasz@gmail.com");
			}, 1500);
		} catch (err) {
			setCopySuccess("Spróbuj ponownie!");
		}
	};
	return (
		<>
			<section className="contact">
				<h2>
					let's be in
					<span> touch</span>
				</h2>
				<h3>
					click to copy
					<span> email address</span>
				</h3>
				<p
					className="contact--mail"
					onClick={() =>
						copyToClipBoard("kolaczynski.tomasz@gmail.com")
					}
				>
					{copySuccess}
				</p>
				<h3>
					or text
					<span> me</span>
				</h3>
				<ContactForm />
			</section>
		</>
	);
};
export default Contact;
