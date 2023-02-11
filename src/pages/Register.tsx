import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { Input, LoadingSpinner } from "../components"

// Animation
import { motion } from "framer-motion"

// Context
import { useAuthContext } from "../context/AuthContext"

const Register = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		pwd: "",
		pwd2: "",
		phone: {
			country_code: "",
			number: "",
		},
	})
	const [formError, setFormErrors] = useState({
		name: "",
		email: "",
		pwd: "",
		pwd2: "",
		phone: "",
	})

	const { registerUser, isLoading, isAuth } = useAuthContext()

	const validate = () => {
		const errors = {
			name: "",
			email: "",
			pwd: "",
			pwd2: "",
			phone: "",
		}
		const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/

		if (!user.name) {
			errors.name = "Name is required"
		}
		if (!user.email) {
			errors.email = "Email is required!"
		} else if (!user.email.match(regex)) {
			errors.email = "Please enter a valid email id!"
		}

		if (user.pwd.length < 8) {
			errors.pwd = "Password must be 8 or more characters!"
		}
		if (user.pwd2.length < 8) {
			errors.pwd2 = "Password must be 8 or more characters!"
		}
		if (user.pwd !== user.pwd2) {
			errors.pwd2 = "Password must equal!"
			if (user.pwd.length < 1) {
				errors.pwd = "Password must equal! & must be 8 or more characters!"
			} else {
				errors.pwd = "Password must equal!"
			}
		}

		if (user.phone.number.length < 10) {
			errors.phone = "Enter a valid phone number!"
		}
		if (user.phone.number.length > 10) {
			errors.phone = "Phone number must be under 10 digits!"
		}
		if (!user.phone.country_code) {
			errors.phone = "Country code is required!"
		}

		setFormErrors(errors)
		if (errors.name || errors.email || errors.pwd || errors.pwd2) {
			return false
		}

		return true
	}

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const phoneNumberChangeHandler = (e: {
		country_code: string
		number: string
	}) => {
		setUser((prev) => ({
			...prev,
			phone: { country_code: e.country_code, number: e.number },
		}))
	}

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		const result = validate()
		if (result) {
			registerUser({
				email: user.email,
				name: user.name,
				password: user.pwd,
				phone: user.phone,
			})
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
			className="min-h-[calc(100vh-10rem)] w-full"
		>
			<div className="max-w-[600px] w-full m-auto py-11 ">
				<div>
					<h2 className="text-[#394252] font-bold text-4xl">
						Register Account
					</h2>
					<p className="text-sm text-[#6E7278]">
						Lorem ipsum dolor sit amet consectetur. Id feugiat lectus nunc
						aliquam massa tellus.
					</p>
				</div>

				<form onSubmit={onSubmitHandler} className="mt-10 max-w-md">
					<div className="py-3">
						<Input.Base
							value={user.name}
							name="name"
							onChange={onChangeHandler}
							label="Name"
							type="text"
							errorMsg={formError.name}
							isError={formError.name ? true : false}
						/>
					</div>
					<div className="py-3">
						<Input.Base
							value={user.email}
							name="email"
							onChange={onChangeHandler}
							label="Email id"
							type="email"
							errorMsg={formError.email}
							isError={formError.email ? true : false}
						/>
					</div>
					<div className="py-3">
						<Input.Password
							value={user.pwd}
							name="pwd"
							onChange={onChangeHandler}
							label="Password"
							errorMsg={formError.pwd}
							isError={formError.pwd ? true : false}
							enableShowPassword
						/>
					</div>
					<div className="py-3">
						<Input.Password
							value={user.pwd2}
							name="pwd2"
							onChange={onChangeHandler}
							label="Confirm password"
							errorMsg={formError.pwd2}
							isError={formError.pwd2 ? true : false}
						/>
					</div>
					<div className="py-3">
						<Input.Phone
							value={user.phone}
							name="phone"
							onChange={phoneNumberChangeHandler}
							label="Phone"
							errorMsg={formError.phone}
							isError={formError.phone ? true : false}
						/>
					</div>
					<button
						type="submit"
						className="bg-[#7265E3] duration-300 hover:bg-[#7265E3]/80 h-12 w-48 mt-4 flex justify-center items-center text-white text-sm font-medium rounded-[46px] shadow-lg shadow-[rgba(114, 101, 227, 0.45)]"
					>
						{isLoading ? <LoadingSpinner /> : "Register Account"}
					</button>
				</form>
				<span className="block text-[#394252] font-medium text-sm mt-12">
					Already have an account?
					<Link
						to="/login"
						className="text-[#4E62D2] hover:text-[#4E62D2]/80 pl-2"
					>
						Login
					</Link>
				</span>
			</div>
		</motion.section>
	)
}

export default Register
