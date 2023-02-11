import axios from "axios"
import { createContext, useState, useContext } from "react"

type RegisterDataType = {
	name: string
	email: string
	password: string
	phone: {
		country_code: string
		number: string
	}
}

type LoginDataType = {
	email: string
	password: string
}

type AuthContextType = {
	registerUser: (arg: RegisterDataType) => void
	loginUser: (arg: LoginDataType) => void
	logout: () => void
	isAuth: boolean
	user: {
		name: string
		email: string
	} | null
	isLoading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

const jwt =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1ldGZsdXgiLCJpYXQiOjE1MTYyMzkwMjJ9.qx5ezkn8-AY3Pm0MCPi64xl4ep7VGK_1IttSnaPWOEs"

let getUser = localStorage.getItem("user")

if (getUser) {
	getUser = JSON.parse(getUser)
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuth, setIsAuth] = useState(getUser ? true : false)
	const [user, setUser] = useState<any>(getUser)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const registerUser = async (userData: RegisterDataType) => {
		try {
			setIsLoading(true)
			const res = await axios.post("http://httpbin.org/post", userData)
			const data = await res.data.json
			if (data) {
				setUser({ email: data.email })
				localStorage.setItem(
					"user",
					JSON.stringify({ name: data.name, email: data.email, jwt: jwt })
				)
				setIsLoading(false)
				window.location.assign("/")
			}
		} catch (error) {
			setIsAuth(false)
			setUser(null)
			setIsLoading(false)
		}
	}
	const loginUser = async (userData: LoginDataType) => {
		try {
			setIsLoading(true)
			const res = await axios.post("http://httpbin.org/post", userData)
			const data = await res.data.json
			if (data) {
				setUser({ email: data.email })
				localStorage.setItem(
					"user",
					JSON.stringify({ email: data.email, jwt: jwt })
				)
				setIsLoading(false)
				window.location.assign("/")
			}
		} catch (error) {
			setIsAuth(false)
			setUser(null)
			setIsLoading(false)
		}
	}

	const logout = () => {
		localStorage.removeItem("user")
		window.location.assign("/")
	}

	return (
		<AuthContext.Provider
			value={{ registerUser, loginUser, logout, user, isAuth, isLoading }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const auth = useContext(AuthContext) as AuthContextType
	return { ...auth }
}
