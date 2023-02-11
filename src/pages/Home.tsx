// Animation
import { motion } from "framer-motion"

import {
	Accordion,
	Cards,
	Carousel,
	ContactUs,
	Features,
	Hero,
} from "../components"

type Props = {
	destinationRef: React.RefObject<HTMLSpanElement>
}

const Home = ({ destinationRef }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Hero />
			<Features />
			<Carousel />
			<Cards />
			<Accordion />
			<span ref={destinationRef} />
			<ContactUs />
		</motion.div>
	)
}

export default Home
