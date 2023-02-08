import { Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"

// Components
import { Navbar } from "./components"

function App() {
	return (
		<main className="m-auto w-full px-24">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</main>
	)
}

export default App
