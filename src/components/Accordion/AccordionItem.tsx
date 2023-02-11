import { motion } from "framer-motion"
import { HiMinus, HiPlus } from "react-icons/hi"

type Props = {
	item: {
		id: number
		title: string
		content: string
	}

	toggle: (arg: number) => void
	selected: number | null
}

const AccordionItem = ({ item, toggle, selected }: Props) => {
	return (
		<motion.div
			initial={{ y: 40, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
			viewport={{ once: true }}
			key={item.id}
			className="px-12 pt-1"
		>
			<div
				onClick={() => toggle(item.id)}
				className="flex justify-between items-center py-5 cursor-pointer"
			>
				<h4 className="text-lg font-medium text-black">{item.title}</h4>
				<span
					className={`text-2xl block text-[#F84F7B] duration-300 ${
						selected === item.id ? "rotate-180" : "rotate-[360deg]"
					}`}
				>
					{selected === item.id ? <HiMinus /> : <HiPlus />}
				</span>
			</div>
			<div
				className={`text-[#545454] duration-300 ease-in-out ${
					selected === item.id ? "h-auto pb-5" : "pb-0 max-h-0 overflow-hidden"
				}`}
			>
				{item.content}
			</div>
		</motion.div>
	)
}

export default AccordionItem
