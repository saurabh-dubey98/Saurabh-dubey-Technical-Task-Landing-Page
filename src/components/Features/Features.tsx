import { motion } from "framer-motion"
import { FiSettings } from "react-icons/fi"
import { HiShieldCheck } from "react-icons/hi"
import { ImEarth } from "react-icons/im"

// Components
import FeatureCard from "./FeatureCard"

const dummyData = [
	{
		id: 1,
		title: "Lorem Ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. In convallis lobortis nuncet.",
		Icon: FiSettings,
	},
	{
		id: 2,
		title: "Lorem Ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. In convallis lobortis nuncet.",
		Icon: HiShieldCheck,
	},
	{
		id: 3,
		title: "Lorem Ipsum",
		description:
			"Lorem ipsum dolor sit amet consectetur. In convallis lobortis nuncet.",
		Icon: ImEarth,
	},
]

const Features = () => {
	const container = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
			},
		},
	}

	return (
		<div className="m-auto mt-24">
			<h2 className="text-4xl text-center mb-20">Our Features</h2>
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "0px 0px -200px 0px" }}
				className=" flex justify-center gap-6"
			>
				{dummyData.map((item) => (
					<FeatureCard key={item.id} {...item} />
				))}
			</motion.div>
		</div>
	)
}

export default Features
