type Props = {
	type: "submit" | "reset" | "button"
	variant: "dark" | "light"
	children: string
	onClick: (arg: React.MouseEvent<HTMLButtonElement>) => void
}

type Style = {
	dark: string
	light: string
}

const Button = ({ type, variant, children, onClick }: Props) => {
	const style: Style = {
		dark: "bg-[#212024] rounded-[112.222px] text-white text-sm duration-300 hover:bg-[#212024]/80",
		light: "bg-gray rounded-[112.222px] text-white text-sm",
	}
	return (
		<button
			onClick={onClick}
			className={`py-[10px] px-6 ${style[variant]}`}
			type={type}
		>
			{children}
		</button>
	)
}

export default Button
