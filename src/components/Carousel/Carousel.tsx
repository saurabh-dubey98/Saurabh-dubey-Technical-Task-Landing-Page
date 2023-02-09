import { useState } from "react"
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi"
import { RxDot, RxDotFilled } from "react-icons/rx"
import { carouselData } from "./data"

// Image
import waveTop from "../../assets/wave-top.svg"

// Components
import CarousalItem from "./CarousalItem"

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	const nextSlide = () => {
		const length = carouselData.length
		const newIndex =
			currentIndex == length - 1 ? 0 : (currentIndex + 1) % length
		setCurrentIndex(newIndex)
	}
	const prevSlide = () => {
		const length = carouselData.length
		setCurrentIndex(
			currentIndex == 0 ? length - 1 : (currentIndex - 1) % length
		)
	}

	const dotClickHandler = (idx: number) => {
		setCurrentIndex(idx)
	}

	if (!Array.isArray(carouselData) || carouselData.length <= 0) {
		return null
	}

	return (
		<>
			<div className="-ml-24 -mr-24 -mb-[2px]">
				<img src={waveTop} className="min-w-full " />
			</div>
			<div className=" bg-black -ml-24 -mr-24">
				<div className="h-full mx-24 px-28">
					<div className="h-full flex items-center">
						<div className="m-auto w-[920px] overflow-hidden">
							{/* Carousel item */}
							<div
								className="flex transition-transform duration-300"
								style={{ transform: `translate(-${currentIndex * 100}%)` }}
							>
								{carouselData.map((item) => (
									<CarousalItem key={item.id} item={item} />
								))}
							</div>

							{/* Arrow buttons */}
							<div className="flex items-center w-full justify-between mt-10 max-w-[460px] m-auto">
								<TfiArrowCircleLeft
									onClick={() => prevSlide()}
									className="w-9 h-9 text-white cursor-pointer hover:text-white/80 duration-200 active:text-white/60"
								/>
								<div className="flex items-center gap-2">
									{carouselData.map((_, idx) => {
										if (idx === currentIndex) {
											return (
												<RxDotFilled
													key={idx}
													onClick={() => dotClickHandler(idx)}
													className="text-white w-4 h-4 cursor-pointer"
												/>
											)
										} else {
											return (
												<RxDot
													key={idx}
													onClick={() => dotClickHandler(idx)}
													className="text-white w-4 h-4 cursor-pointer"
												/>
											)
										}
									})}
								</div>
								<TfiArrowCircleRight
									onClick={() => nextSlide()}
									className="w-9 h-9 text-white cursor-pointer hover:text-white/80 duration-200 active:text-white/60"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="-ml-24 -mr-24 -mt-1 relative -z-50 block">
				<img src={waveTop} className="min-w-full rotate-180" />
			</div>
		</>
	)
}

export default Carousel
