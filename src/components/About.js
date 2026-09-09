import React from 'react'

export default function About() {
	return (
		<section className="content-page" aria-labelledby="about-title">
			<p className="content-eyebrow">About Text Utility</p>
			<h1 id="about-title">Make every word work harder.</h1>
			<p>
				Text Utility is a focused set of tools for quickly cleaning up and
				reshaping everyday writing. Convert text between cases, clear a draft,
				and keep an eye on your character and word counts as you work.
			</p>
			<div className="content-grid">
				<article>
					<h2>Simple by design</h2>
					<p>One workspace keeps the writing visible and the useful actions close at hand.</p>
				</article>
				<article>
					<h2>Ready for anything</h2>
					<p>Prepare notes, titles, messages, and drafts without leaving your browser.</p>
				</article>
			</div>
		</section>
	)
}
