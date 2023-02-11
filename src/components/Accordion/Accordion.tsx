import { useState } from "react"
import { motion } from "framer-motion"

// Components
import AccordionItem from "./AccordionItem"

// Dummy data
import { accordionDummyData } from "./data"

const Accordion = () => {
	const [selected, setSelected] = useState<number | null>(null)

	const toggle = (i: number) => {
		if (selected === i) {
			return setSelected(null)
		}

		setSelected(i)
	}

	return (
		<section className="m-auto mt-32 duration-300">
			<h2 className="text-4xl text-center mb-16">
				Frequently Asked Questions (FAQs)
			</h2>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: { staggerChildren: 0.1, duration: 0.8 },
				}}
				viewport={{ once: true, margin: "0px 0px -200px 0px" }}
				className="max-w-[900px]  m-auto divide-y-[1px] divider-y-[#E0E0E0]"
			>
				{accordionDummyData.map((item) => (
					<AccordionItem
						key={item.id}
						item={item}
						toggle={toggle}
						selected={selected}
					/>
				))}
			</motion.div>
		</section>
	)
}

export default Accordion
