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
		<div key={item.id} className="px-12 pt-2">
			<div
				onClick={() => toggle(item.id)}
				className="flex justify-between items-center h-16 cursor-pointer"
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
					selected === item.id ? "h-auto pb-6" : "pb-0 max-h-0 overflow-hidden"
				}`}
			>
				{item.content}
			</div>
		</div>
	)
}

export default AccordionItem
