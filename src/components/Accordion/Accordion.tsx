import { useState } from "react"

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
			<div className="max-w-[900px]  m-auto divide-y-[1px] divider-y-[#E0E0E0]">
				{accordionDummyData.map((item) => (
					<AccordionItem
						key={item.id}
						item={item}
						toggle={toggle}
						selected={selected}
					/>
				))}
			</div>
		</section>
	)
}

export default Accordion
