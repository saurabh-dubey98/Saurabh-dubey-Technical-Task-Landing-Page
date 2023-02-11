import { Oval } from "react-loader-spinner"

const LoadingSpinner = () => {
	return (
		<Oval
			height={27}
			width={27}
			color="#7282dd"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
			ariaLabel="oval-loading"
			secondaryColor="#ffffff"
			strokeWidth={5}
			strokeWidthSecondary={5}
		/>
	)
}

export default LoadingSpinner
