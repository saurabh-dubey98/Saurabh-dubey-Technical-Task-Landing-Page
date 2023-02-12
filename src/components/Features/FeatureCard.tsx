import { IconType } from "react-icons"

type Props = {
	id: number
	title: string
	description: string
	Icon: IconType
}

const FeatureCard = ({ title, description, Icon }: Props) => {
	return (
		<div className="hover:bg-[#F84F7B] hover:border-[#F84F7B] group duration-500 flex justify-center flex-col border-black rounded-[86.5993px] border-[0.87239px] py-6 px-10 w-[350px] h-[310px]">
			<Icon className="w-[40px] h-[40px] text-[#F84F7B] block group-hover:hidden" />
			<div className="mt-8 group-hover:-translate-y-3 duration-300">
				<h3 className="text-3xl text-black group-hover:text-white font-semibold">
					{title}
				</h3>
				<div className="mt-3 text-black group-hover:text-white">
					{description}
				</div>
				<button className="text-white text-sm bg-[#FC648C] font-semibold py-3 px-6 rounded-[112.222px]  hidden group-hover:block mt-10">
					Read More
				</button>
			</div>
		</div>
	)
}

export default FeatureCard
