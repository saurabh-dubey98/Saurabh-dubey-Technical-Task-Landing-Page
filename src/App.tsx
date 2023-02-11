import { useRef } from "react"
import { Routes, Route } from "react-router-dom"

// Context
import { AuthProvider } from "./context/AuthContext"

// Pages
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

// Components
import { Navbar, Footer } from "./components"

function App() {
	const destinationRef = useRef<HTMLSpanElement>(null)
	const scrollToContactUsRef = () => {
		destinationRef.current?.scrollIntoView({
			behavior: "smooth",
		})
	}
	return (
		<main className="m-auto w-full px-24">
			<AuthProvider>
				<Navbar scrollToContactUsRef={scrollToContactUsRef} />
				<Routes>
					<Route path="/" element={<Home destinationRef={destinationRef} />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</AuthProvider>
		</main>
	)
}

export default App
