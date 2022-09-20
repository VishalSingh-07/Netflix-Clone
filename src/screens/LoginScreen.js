import React from "react"
import "./LoginScreen.css"
import logo from "../Image/Navbar/logo2.svg"
import SignInScreen from "./SignInScreen"
//import Loading from "../Components/Loading/Loading"
// import datas from "../../src/data/data.json"
// import AccordionCompound from "../Components/AccordionCompound"
// import Feature from "../Components/Feature"
function LoginScreen() {
	const [signIn, setSignIn] = React.useState(false)
	return (
		<>
			<div className="loginScreen">
				<div className="loginScreen_background">
					<img className="loginScreen_logo" src={logo} alt="logo" />
					<button
						onClick={() => setSignIn(true)}
						className="loginScreen_button"
					>
						Sign in
					</button>
					<div className="loginScreen_gradient"></div>
				</div>
				<div className="loginScreen_body">
					{signIn ? (
						<SignInScreen />
					) : (
						<>
							<h1>Unlimited films, TV programmes and more.</h1>
							<h2>Watch anywhere. Cancel at any time</h2>
							<h3>
								Ready to watch? Enter your email to create or restart your
								membership.
							</h3>

							<div className="loginScreen_Input">
								<form>
									<input type="email" placeholder="Email Address" />
									<button
										onClick={() => setSignIn(true)}
										className="loginScreen_getStarted"
									>
										GET STARTED
									</button>
								</form>
							</div>
						</>
					)}
				</div>
			</div>

			{/* <div>
				{!signIn ? (
					<div className="loginScreen__feature">
						{datas.map((data) => (
							<div>
								<Feature
									key={data.id}
									title={data.title}
									subTitle={data.subTitle}
									image={data.image}
									alt={data.alt}
								/>
							</div>
						))}
						<AccordionCompound />
					</div>
				) : null}
			</div> */}
		</>
	)
}

export default LoginScreen
