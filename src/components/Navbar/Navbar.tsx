import { useState } from "react"
import { Link } from "react-router-dom"
import { HiOutlineUserCircle } from "react-icons/hi"
import { motion, AnimatePresence } from "framer-motion"

// Context
import { useAuthContext } from "../../context/AuthContext"

// Components
import { Button } from ".."

type Props = {
	scrollToContactUsRef: () => void
}

const Navbar = ({ scrollToContactUsRef }: Props) => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const { isAuth, user, logout } = useAuthContext()

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
				{isAuth && (
					<HiOutlineUserCircle
						onClick={toggle}
						className="w-10 h-10 cursor-pointer duration-300 text-black hover:text-black/70 active:text-black/50"
					/>
				)}

				<AnimatePresence>
					{showMenu && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
							exit={{ opacity: 0, y: 20 }}
							className="absolute top-14 right-0 rounded-xl shadow-xl border-[0.87px] border-gray-100 bg-white overflow-hidden py-2 px-4"
						>
							<div className="font-semibold text-[12px]">{user?.email}</div>
							<button
								onClick={logout}
								className="bg-red-800/80 duration-300 active:bg-red-800/90 hover:bg-red-800 font-semibold text-sm text-white px-3 py-[6px] mt-2 rounded-[86.5993px]"
							>
								Logout
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	)
}

export default Navbar
