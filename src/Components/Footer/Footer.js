import React from "react"
import "./Footer.css"
import LinkCard from "./LinkCard"
import HeaderSocials from "./HeaderSocials"
function Footer() {
	return (
		<div className="Footer">
			<div className="Question">
				<h3>Questions? Call 000-800-040-1843</h3>
			</div>
			<LinkCard />

			<div className="Note">
				<p>
					<strong>Note:</strong> Please Refresh the page 1-2 times if Movie
					Poster is not visible.
				</p>
			</div>
			<div className="logo">
				<HeaderSocials  className="home_Social"/>
			</div>
			<div className="CopyRight">
				<p>© 1997-2025 Netflix, Inc  All Right Reserved</p>
			</div>
		</div>
	)
}

export default Footer
