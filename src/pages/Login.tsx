import { useState, useEffect } from "react"
import { Navigate } from "react-router"

// Animation
import { motion } from "framer-motion"

// Context
import { useAuthContext } from "../context/AuthContext"

// Components
import { Input, LoadingSpinner } from "../components"
import { Link } from "react-router-dom"

type UserType = {
	email: string
	password: string
}

type FormErrorType = UserType

const Login = () => {
	const [user, setUser] = useState<UserType>({
		email: "",
		password: "",
	})

	const [formError, setFormErrors] = useState<FormErrorType>({
		email: "",
		password: "",
	})

	const { loginUser, isLoading, isAuth } = useAuthContext()

	const validate = () => {
		const errors = {
			email: "",
			password: "",
		}
		const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/

		if (!user.email) {
			errors.email = "Email is required!"
		} else if (!user.email.match(regex)) {
			errors.email = "Please enter a valid email id!"
		}

		if (user.password.length < 8) {
			errors.password = "Password must be 8 or more characters!"
		}

		setFormErrors(errors)
		if (errors.email || errors.password) {
			return false
		}

		return true
	}

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		const result = validate()
		if (result) {
			loginUser(user)
		}
	}

	if (isAuth) {
		return <Navigate to="/" />
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="min-h-[calc(100vh-10rem)] w-full pt-20"
		>
			<div className="max-w-[400px] w-full m-auto pb-8 pt-6 shadow-lg px-8 rounded-3xl bg-white border-[0.01px] border-gray-100">
				<h2 className="text-center text-[#394252] font-semibold text-2xl">
					Login
				</h2>
				<form onSubmit={onSubmitHandler} className="mt-6">
					<div className="py-3">
						<Input.Base
							value={user.email}
							name="email"
							onChange={onChangeHandler}
							label="Email"
							type="email"
							errorMsg={formError.email}
							isError={formError.email ? true : false}
						/>
					</div>
					<div className="py-3">
						<Input.Password
							value={user.password}
							name="password"
							onChange={onChangeHandler}
							label="Password"
							errorMsg={formError.password}
							isError={formError.password ? true : false}
							enableShowPassword
						/>
					</div>
					<div className="flex justify-between items-start px-2 pt-1">
						<div>
							<label className="text-[12px] text-[#6E7278] font-semibold flex items-center gap-2 cursor-pointer">
								<input type="checkbox" />
								<span>Remember Me</span>
							</label>
						</div>

						<Link className="text-[12px] font-semibold text-[#0071E3]" to="#">
							Forgot Password?
						</Link>
					</div>

					<button
						type="submit"
						className="min-w-full h-[45px] flex items-center justify-center font-semibold text-white text-sm mt-8 bg-[#0071E3] duration-300 rounded-3xl hover:bg-[#0071E3]/80"
					>
						{isLoading ? <LoadingSpinner /> : "Login"}
					</button>
				</form>
			</div>
		</motion.section>
	)
}

export default Login
