import React from 'react'

export default function ContactUs() {
	return (
		<section className="content-page" aria-labelledby="contact-title">
			<p className="content-eyebrow">Get in touch</p>
			<h1 id="contact-title">Tell us what would make writing easier.</h1>
			<p>
				Have a question, an idea, or feedback about Text Utility? Send us a
				message and our team will get back to you at hello@textutility.example.
			</p>
			<form className="contact-form">
				<label htmlFor="contact-name">Name</label>
				<input id="contact-name" name="name" type="text" autoComplete="name" />
				<label htmlFor="contact-email">Email</label>
				<input id="contact-email" name="email" type="email" autoComplete="email" />
				<label htmlFor="contact-message">Message</label>
				<textarea id="contact-message" name="message" rows="5" />
				<button type="submit">Send message</button>
			</form>
		</section>
	)
}
