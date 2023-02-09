import { useRef } from "react"
import { Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"

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
			<Navbar scrollToContactUsRef={scrollToContactUsRef} />
			<Routes>
				<Route path="/" element={<Home destinationRef={destinationRef} />} />
			</Routes>
			<Footer />
		</main>
	)
}

export default App
