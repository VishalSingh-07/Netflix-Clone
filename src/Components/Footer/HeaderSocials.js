import React from "react"
import HeaderSocialsCard from "./HeaderSocialsCard"
function HeaderSocials() {
	return (
		<div className="home_socials">
			<HeaderSocialsCard
				href="https://twitter.com/VishalSingh_13"
				icon="fa-brands fa-twitter"
			/>
			<HeaderSocialsCard
				href="https://github.com/VishalSingh-07"
				icon="fa-brands fa-github"
			/>
			<HeaderSocialsCard
				href="https://www.linkedin.com/in/vishal-singh-733570200/"
				icon="fa-brands fa-linkedin"
			/>
			<HeaderSocialsCard
				href="https://www.facebook.com/profile.php?id=100008505453530"
				icon="fa-brands fa-facebook"
			/>
			<HeaderSocialsCard
				href="mailto:vishalsinghagr25@gmail.com"
				icon="fa-solid fa-envelope"
			/>
		</div>
	)
}
export default HeaderSocials
