import { useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

// Animation
import { AnimatePresence } from "framer-motion"

// Context
import { AuthProvider } from "./context/AuthContext"

// Pages
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

// Components
import { Navbar, Footer } from "./components"

function App() {
	const location = useLocation()
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
				<AnimatePresence>
					<Routes location={location} key={location.pathname}>
						<Route
							path="/"
							element={<Home destinationRef={destinationRef} />}
						/>
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</AnimatePresence>
				<Footer />
			</AuthProvider>
		</main>
	)
}

export default App
