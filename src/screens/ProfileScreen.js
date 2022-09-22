import React from "react"
import Nav from "../Components/Nav/Nav"
import "./ProfileScreen.css"
import Avatar from "../Image/Navbar/Avatar.png"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { auth } from "../firebase"
import Plans from "./Plan"
function ProfileScreen() {
	const user = useSelector(selectUser)

	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen_body">
				<h1>Edit Profile</h1>
				<div className="profileScreen_info">
					<img src={Avatar} alt="Avatar" />
					<div className="profileScreen_details">
						<h2>Welcome! {user.email}</h2>
						<button
							onClick={() => {
								auth.signOut()
							}}
							className="profileScreen_signOut"
						>
							Sign Out
						</button>
					</div>
				</div>
				<div className="Motivator">
					<h1>Subscribe Now to Start Watching</h1>
				</div>
				<div className="Netflix_plans">
					{Plans.map((planItem) => (
						<div className="profileScreen_plan">
							<div className="profileScreen_planInfo">
								<h5>{planItem.Name}</h5>
								<p>{planItem.Device}</p>
								<p>{planItem.Streaming}</p>
								<h4>{planItem.Price}</h4>
							</div>
							<button className="Active_Button">Activate Now</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProfileScreen
