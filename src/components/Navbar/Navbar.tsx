import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HiOutlineUserCircle } from "react-icons/hi"

// Components
import { Button } from ".."

type Props = {
	scrollToContactUsRef: () => void
}

const Navbar = ({ scrollToContactUsRef }: Props) => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const toggle = () => {
		setShowMenu((prev) => !prev)
	}

	return (
		<nav className="w-full h-20 flex items-center justify-between">
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
			<div className="flex items-center gap-4 relative">
				<Button onClick={scrollToContactUsRef} type="button" variant="dark">
					Contact Us
				</Button>
				<HiOutlineUserCircle
					onClick={toggle}
					className="w-10 h-10 cursor-pointer duration-300 text-black hover:text-black/70 active:text-black/50"
				/>
				{showMenu && (
					<div className="absolute top-14 right-0 rounded-[30.5993px] border-[0.87px] border-black bg-white overflow-hidden py-2 px-4">
						<div className="font-semibold text-sm">Saurabh Dubey</div>
						<button className="bg-red-800/80 duration-300 active:bg-red-800/90 hover:bg-red-800 font-semibold text-sm text-white px-3 py-[6px] mt-2 rounded-[86.5993px]">
							Logout
						</button>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
