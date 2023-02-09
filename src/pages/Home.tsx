import {
	Accordion,
	Cards,
	Carousel,
	ContactUs,
	Features,
	Hero,
} from "../components"

type Props = {
	destinationRef: React.RefObject<HTMLSpanElement>
}

const Home = ({ destinationRef }: Props) => {
	return (
		<div>
			<Hero />
			<Features />
			<Carousel />
			<Cards />
			<Accordion />
			<span ref={destinationRef} />
			<ContactUs />
		</div>
	)
}

export default Home
