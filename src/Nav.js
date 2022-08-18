import React, { useEffect } from "react"
import "./Nav.css"
import Netflixlogo from "../src/Image/Navbar/logo2.svg"
// import Avatar from "../src/Image/Navbar/Avatar.png"
function Nav() {
	const [show, handleShow] = React.useState(false)

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true)
		} else {
			handleShow(false)
		}
	}
	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar)
		return () => window.removeEventListener("scroll", transitionNavbar)
	}, [])
	return (
		<div className={`nav ${show && "nav_black"}`}>
			<div className="nav_contents">
				<img className="nav_logo" src={Netflixlogo} alt="Netflix Logo" />
				<button type="button" class="btn nav_avatar">
					Join Now
				</button>
				{/* <img className="nav_avatar" src={Avatar} alt="Avatar Logo" /> */}
			</div>
		</div>
	)
}

export default Nav
