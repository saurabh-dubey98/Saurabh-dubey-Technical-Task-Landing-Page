type Props = {
	type: "submit" | "reset" | "button"
	variant: "dark" | "light"
	children: string
}

type Style = {
	dark: string
	light: string
}

const Button = ({ type, variant, children }: Props) => {
	const style: Style = {
		dark: "bg-[#212024] rounded-[112.222px] text-white text-sm",
		light: "bg-gray rounded-[112.222px] text-white text-sm",
	}
	return (
		<button className={`py-[10px] px-6 ${style[variant]}`} type={type}>
			{children}
		</button>
	)
}

export default Button
