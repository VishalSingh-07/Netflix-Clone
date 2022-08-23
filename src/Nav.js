import React, { useEffect } from "react"
import "./Nav.css"
import Netflixlogo from "../src/Image/Navbar/logo2.svg"
import { useNavigate } from "react-router-dom"
// import User from "../src/Image/Navbar/person-circle.svg"
// import Avatar from "../src/Image/Navbar/Avatar.png"
function Nav() {
	const [show, handleShow] = React.useState(false)
	// const history = React.useHistory()
	const navigate = useNavigate()
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
				<img
					onClick={() => navigate("/")}
					className="nav_logo"
					src={Netflixlogo}
					alt="Netflix Logo"
				/>
				<i
					onClick={() => navigate("/profile")}
					class="fa-solid fa-circle-user nav_avatar"
				></i>
				{/* <img src={User} class="nav_avatar" alt="User Info"></img> */}
				{/* <button type="button" class="btn nav_avatar">
					Join Now
				</button> */}
				{/* <img className="nav_avatar" src={Avatar} alt="Avatar Logo" /> */}
			</div>
		</div>
	)
}

export default Nav
