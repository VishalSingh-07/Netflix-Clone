import React, { useRef } from "react"
import { signup } from "../firebase"
import { logIn } from "../firebase"
import "./SignInScreen.css"
function SignInScreen() {
	const emailRef = useRef(null)
	const passwordRef = useRef(null);
	// const [signup, setSignup] = React.useState(false);

	const register = (e) => {
		e.preventDefault()
		signup(emailRef.current.value, passwordRef.current.value)
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
				{/* <h1>{signup ? "Sign Up" : "Sign In"}</h1> */}
				<h1>Sign in</h1>
				<input ref={emailRef} placeholder="Email" type="email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
				<button className="" type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="signupScreen_gray">New to Netflix? </span>{" "}
					<span className="signupScreen_link" onClick={register}>
						Sign Up Now
					</span>
				</h4>
			</form>
		</div>
	)
}

export default SignInScreen
