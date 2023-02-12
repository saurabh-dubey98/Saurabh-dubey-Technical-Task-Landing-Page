import { motion } from "framer-motion"

// Images  for card
import cardImg1 from "../../assets/card-img1.png"
import cardImg2 from "../../assets/card-img2.png"
import cardImg3 from "../../assets/card-img3.png"

const Cards = () => {
	return (
		<section className="m-auto max-w-[1200px] w-full">
			<div className="grid grid-cols-[1fr_480px] gap-10 mb-20">
				{/* <div className="grid grid-cols-2 gap-5"> */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { staggerChildren: 0.1, duration: 0.8 },
					}}
					viewport={{ once: true, margin: "0px 0px -200px 0px" }}
					className="w-full flex flex-col justify-center items-start"
				>
					<motion.h4
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
						viewport={{ once: true }}
						className="text-3xl text-black mb-4"
					>
						Lorem Ipsum
					</motion.h4>
					<motion.p
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
						viewport={{ once: true }}
						className="text-black font-normal mb-5"
					>
						Lorem ipsum dolor sit amet consectetur. Consectetur velit consequat
						orci arcu egestas enim morbi neque pharetra. Id feugiat ullamcorper
						quis suscipit tempor ullamcorper aliquam consequat. In euismod a in
						amet. Interdum ut phasellus aliquet eget molestie risus velit ipsum
						consectetur. Amet bibendum cras porttitor nullam.
					</motion.p>
					<motion.button
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 0.1 } }}
						viewport={{ once: true }}
						className="outline-none border-none text-sm text-white bg-[#212024] rounded-[112.222px] py-3 px-6 duration-300 hover:bg-[#212024]/90"
					>
						Read More
					</motion.button>
				</motion.div>
				<div className="w-[480px] h-[480px] justify-self-end bg-[#FFD8E2] overflow-hidden rounded-[86.5993px] relative">
					<img className="w-full object-contain" src={cardImg1} />
					<img
						className="object-contain z-50 absolute top-0 w-[331px]"
						src={cardImg3}
					/>
				</div>
			</div>
			<div className="grid grid-cols-[480px_1fr] gap-10">
				{/* <div className="grid grid-cols-2 gap-5 mt-20"> */}
				<div className="w-[480px] h-[480px] justify-self-start bg-[#FFD8E2] overflow-hidden rounded-[86.5993px] relative">
					<img className="w-full h-full object-contain" src={cardImg2} />
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{
						opacity: 1,
						transition: { staggerChildren: 0.1, duration: 0.8 },
					}}
					viewport={{ once: true, margin: "0px 0px -200px 0px" }}
					className="w-full  flex flex-col justify-center items-start"
				>
					<motion.h4
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
						viewport={{ once: true }}
						className="text-3xl text-black mb-4"
					>
						Lorem Ipsum
					</motion.h4>
					<motion.p
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
						viewport={{ once: true }}
						className="text-black font-normal mb-5"
					>
						Lorem ipsum dolor sit amet consectetur. Consectetur velit consequat
						orci arcu egestas enim morbi neque pharetra. Id feugiat ullamcorper
						quis suscipit tempor ullamcorper aliquam consequat. In euismod a in
						amet. Interdum ut phasellus aliquet eget molestie risus velit ipsum
						consectetur. Amet bibendum cras porttitor nullam.
					</motion.p>
					<motion.button
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
						viewport={{ once: true }}
						className="outline-none border-none text-sm text-white bg-[#212024] rounded-[112.222px] py-3 px-6 duration-300 hover:bg-[#212024]/90"
					>
						Read More
					</motion.button>
				</motion.div>
			</div>
		</section>
	)
}

export default Cards
