import { Link } from "react-router-dom"

// Components
import { Button } from ".."

const Navbar = () => {
	return (
		<nav className="w-full h-20 flex items-center justify-between ">
			<div className="">
				<Link to="/" className="text-black text-2xl">
					OPT<span className="font-bold">IVF</span>
				</Link>
			</div>
			<ul className="">
				<li className="list-none space-x-6">
					<Link
						to="#"
						className="text-black hover:text-black/70 duration-200 font-medium text-base"
					>
						Our Mission
					</Link>
					<Link
						to="#"
						className="text-black hover:text-black/70 duration-200 font-medium text-base"
					>
						Our Technology
					</Link>
					<Link
						to="#"
						className="text-black hover:text-black/70 duration-200 font-medium text-base"
					>
						Careers
					</Link>
					<Link
						to="#"
						className="text-black hover:text-black/70 duration-200 font-medium text-base"
					>
						About Company
					</Link>
				</li>
			</ul>
			<div className="">
				<Button type="button" variant="dark">
					Contact Us
				</Button>
			</div>
		</nav>
	)
}

export default Navbar
