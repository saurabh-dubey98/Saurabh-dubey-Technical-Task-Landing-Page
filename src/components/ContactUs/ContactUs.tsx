// Images
import waveImg from "../../assets/contact-us-wave.svg"
import bgImg from "../../assets/contactus-bg.png"

const ContactUs = () => {
	return (
		<div className="relative overflow-y-hidden -ml-24 -mr-24">
			<div className="-ml-24 -mr-24 absolute top-48 left-0  h-fit w-[50%] z-50 bottom-0">
				<img
					className="w-full h-full object-cover"
					src={bgImg}
					alt="background image"
				/>
			</div>
			<div className=" relative -z-10 -mb-28">
				<img className="w-full " src={waveImg} alt="wave" />
			</div>
			<section className=" bg-[#F84F7B] h-96">
				<div className="mx-24 grid grid-cols-2 gap-4 py-10 px-20">
					<div>
						<div className="max-w-[800px] ">
							<h3 className="text-4xl mb-4 text-white font-light">
								Contact Us
							</h3>
							<p className="text-sm text-white leading-7 tracking-wider">
								Lorem ipsum dolor sit amet consectetur. Eget cursus ullamcorper
								mauris faucibus tristique libero justo. Felis elementum
								sollicitudin dolor urna accumsan. Urna adipiscing magnis
								pulvinar ipsum potenti ristique justo.
							</p>
						</div>
					</div>
					<div className=" flex justify-end">
						<form className="grid grid-cols-1 gap-5 max-w-[400px] w-full">
							<input
								className="rounded-[16px] bg-[#FC648C] px-[14px] py-4 text-white text-sm outline-none placeholder:duration-300 placeholder:text-white/50 focus:placeholder:text-white "
								placeholder="Enter your email"
							/>
							<textarea
								className="min-h-[150px] rounded-[16px] bg-[#FC648C] px-[14px] py-4 text-white text-sm outline-none placeholder:duration-300 placeholder:text-white/50 focus:placeholder:text-white "
								placeholder="Enter you message"
							/>
							<button className="w-fit bg-[#212024] text-white text-sm rounded-[112.222px] px-6 py-3 tracking-wider duration-300 hover:bg-[#212024]/70 active:bg-[#212024]/90 border-none">
								Send
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContactUs
