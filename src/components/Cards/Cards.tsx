// Images  for card
import cardImg1 from "../../assets/card-img1.png"
import cardImg2 from "../../assets/card-img2.png"
import cardImg3 from "../../assets/card-img3.png"

const Cards = () => {
	return (
		<section className="m-auto max-w-[1200px] w-full">
			<div className="grid grid-cols-2 gap-5">
				<div className="w-full flex flex-col justify-center items-start">
					<h4 className="text-3xl text-black mb-4">Lorem Ipsum</h4>
					<p className="text-black font-normal mb-5">
						Lorem ipsum dolor sit amet consectetur. Consectetur velit consequat
						orci arcu egestas enim morbi neque pharetra. Id feugiat ullamcorper
						quis suscipit tempor ullamcorper aliquam consequat. In euismod a in
						amet. Interdum ut phasellus aliquet eget molestie risus velit ipsum
						consectetur. Amet bibendum cras porttitor nullam.
					</p>
					<button className="outline-none border-none text-sm text-white bg-[#212024] rounded-[112.222px] py-3 px-6 duration-300 hover:bg-[#212024]/90">
						Read More
					</button>
				</div>
				<div className="w-[512px] h-[512px] justify-self-end bg-[#FFD8E2] overflow-hidden rounded-[86.5993px] relative">
					<img className="w-full object-contain" src={cardImg1} />
					<img
						className="object-contain z-50 absolute top-0 w-[331px]"
						src={cardImg3}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-5 mt-20">
				<div className="w-[512px] h-[512px] justify-self-start bg-[#FFD8E2] overflow-hidden rounded-[86.5993px] relative">
					<img className="w-full h-full object-contain" src={cardImg2} />
				</div>
				<div className="w-full  flex flex-col justify-center items-start">
					<h4 className="text-3xl text-black mb-4">Lorem Ipsum</h4>
					<p className="text-black font-normal mb-5">
						Lorem ipsum dolor sit amet consectetur. Consectetur velit consequat
						orci arcu egestas enim morbi neque pharetra. Id feugiat ullamcorper
						quis suscipit tempor ullamcorper aliquam consequat. In euismod a in
						amet. Interdum ut phasellus aliquet eget molestie risus velit ipsum
						consectetur. Amet bibendum cras porttitor nullam.
					</p>
					<button className="outline-none border-none text-sm text-white bg-[#212024] rounded-[112.222px] py-3 px-6 duration-300 hover:bg-[#212024]/90">
						Read More
					</button>
				</div>
			</div>
		</section>
	)
}

export default Cards
