import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"

// Images
import heroImg from "../../assets/hero-img.png"
import heroBg from "../../assets/hero-bg.png"
const Hero = () => {
	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	}

	return (
		<section className=" h-[calc(100vh-5rem)] grid grid-cols-[75%_25%] items-center ">
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="pt-16 font-light"
			>
				<div className="text-7xl">
					<h2>Reproductive health</h2>
					<span className="text-[#F84F7B]">reinvented</span>
				</div>
				<div className="max-w-[650px] pt-6 text-black">
					Lorem ipsum dolor sit amet consectetur. Eu cursus lorem iaculis vitae
					pulvinar posuere. Turpis facilisis pellentesque nascetur faucibus
					placerat. Cursus
				</div>

				<Link
					to="/register"
					className="bg-black text-white duration-300 hover:bg-black/80 rounded-[1000px] px-6 py-3 flex items-center gap-3 w-fit mt-6"
				>
					Get Started <FiArrowRight />
				</Link>

				<div className="w-full left-30 -z-50  relative">
					<img className="object-contain w-full" src={heroBg} />
				</div>
			</motion.div>
			<div className=" flex items-center justify-center">
				<img className="w-full object-contain max-w-[540px]" src={heroImg} />
			</div>
		</section>
	)
}

export default Hero
