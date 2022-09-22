import React, { useRef } from "react"
import { Signup } from "../firebase"
import { logIn } from "../firebase"
import "./SignInScreen.css"
function SignInScreen() {
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	const [signup, setSignup] = React.useState(false)

	const register = (e) => {
		e.preventDefault()
		Signup(
			emailRef.current.value,
			passwordRef.current.value,
		)
			.then((authUser) => {
				console.log(authUser)
			})
			.catch((error) => {
				alert(error.message)
			})

		// auth
		// 	.createUserWithEmailAndPassword(
		// 		emailRef.current.value,
		// 		passwordRef.current.value
		// 	)
		// 	.then((authUser) => {
		// 		console.log(authUser)
		// 	})
		// 	.catch((error) => {
		// 		alert(error.message)
		// 	})
	}
	const signIn = (e) => {
		e.preventDefault()
		logIn(emailRef.current.value, passwordRef.current.value)
			.then((authUser) => {
				console.log(authUser)
			})
			.catch((error) => {
				alert(error.message)
			})
	}
	return (
		<div className="signUpScreen">
			<form>
				<h1>{signup ? "Sign Up" : "Sign In"}</h1>
				{signup && (
					<input type="text" placeholder="Full Name" />
				)}
				<input ref={emailRef} placeholder="Email" type="email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
				{!signup && (
					<button className="" type="submit" onClick={signIn}>
						Sign In
					</button>
				)}

				{signup && (
					<button className="" type="submit" onClick={register}>
						Sign Up Now
					</button>
				)}

				<h4>
					<span className="signupScreen_gray">
						{signup ? "Already have an account? " : "New to Netflix?   "}
					</span>
					<span
						className="signupScreen_link"
						onClick={() => {
							setSignup(!signup)
						}}
					>
						{signup ? "Sign In" : "Sign Up Now"}
					</span>
				</h4>
			</form>
		</div>
	)
}

export default SignInScreen
