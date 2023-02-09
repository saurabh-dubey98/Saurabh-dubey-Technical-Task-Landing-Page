type Props = {
	item: {
		id: number
		image: string
		text: string
	}
}

const CarousalItem = ({ item }: Props) => {
	return (
		<div key={item.id} className="flex items-start gap-6 min-w-full">
			<div className="max-w-[180px] w-full h-[220px] overflow-hidden rounded-[24px] border-[0.87239px] border-white/50">
				<img className="w-full h-full object-cover" src={item.image} />
			</div>

			<p className="text-white text-xl font-light tracking-wide leading-8">
				{item.text}
			</p>
		</div>
	)
}

export default CarousalItem
