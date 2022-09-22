import React, { useEffect } from "react"
import "./Nav.css"
import Netflixlogo from "../../Image/Navbar/logo2.svg"
import { useNavigate } from "react-router-dom"
import Avatar from "../../Image/Avatar/Home_Avatar.jpg"
function Nav() {
	const [show, handleShow] = React.useState(false)
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
				<img
					onClick={() => navigate("/profile")}
					className="nav_avatar"
					src={Avatar}
					alt="Netflix Logo"
				/>
			</div>
		</div>
	)
}

export default Nav
