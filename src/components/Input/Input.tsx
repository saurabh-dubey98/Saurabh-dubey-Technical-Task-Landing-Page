import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import indFlag from "../../assets/ind-flag.png"
import ausFlag from "../../assets/aus-flag.png"
import { useMemo } from "react"

type BaseProps = {
	value: string
	onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void
	type: "text" | "email"
	name: string
	label: string
	isError: boolean
	errorMsg: string
}

const Base = ({
	value,
	onChange,
	type,
	label,
	name,
	isError,
	errorMsg,
}: BaseProps) => {
	return (
		<div>
			<div className="relative">
				<input
					name={name}
					value={value}
					onChange={(e) => onChange(e)}
					type={type}
					id={name}
					className={`block pl-6 pr-32 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-[43px] border-[1px]  appearance-none focus:outline-none focus:ring-0  peer ${
						isError ? "border-red-600" : "border-gray-300 focus:border-blue-600"
					}`}
					placeholder=" "
				/>
				<label
					htmlFor={name}
					className={`absolute text-sm   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 ${
						isError ? "text-red-500" : "text-gray-500 peer-focus:text-blue-600"
					}`}
				>
					{label}
				</label>
			</div>
			{isError && (
				<p
					id="outlined_error_help"
					className="mt-1 pl-3 text-xs text-red-600 dark:text-red-400"
				>
					{errorMsg}
				</p>
			)}
		</div>
	)
}

type Password = {
	value: string
	onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void
	name: string
	label: string
	isError: boolean
	errorMsg: string
	enableShowPassword?: boolean
}

const Password = ({
	value,
	onChange,
	label,
	name,
	isError,
	errorMsg,
	enableShowPassword,
}: Password) => {
	const [showPwd, setShowPwd] = useState<boolean>(false)

	return (
		<div>
			<div className="relative">
				<input
					name={name}
					value={value}
					onChange={(e) => onChange(e)}
					type={showPwd ? "text" : "password"}
					id={name}
					className={`block pl-6 pr-32 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-[43px] border-[1px]  appearance-none focus:outline-none focus:ring-0  peer ${
						isError ? "border-red-600" : "border-gray-300 focus:border-blue-600"
					}`}
					placeholder=" "
				/>
				<label
					htmlFor={name}
					className={`absolute text-sm   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4 ${
						isError ? "text-red-500" : "text-gray-500 peer-focus:text-blue-600"
					}`}
				>
					{label}
				</label>
				{enableShowPassword && (
					<span
						onClick={() => setShowPwd((prev) => !prev)}
						className="absolute top-4 right-3 font-semibold text-xs text-[#7265E3] cursor-pointer"
					>
						Show password
					</span>
				)}
			</div>
			{isError && (
				<p
					id="outlined_error_help"
					className="mt-1 pl-3 text-xs text-red-600 dark:text-red-400"
				>
					{errorMsg}
				</p>
			)}
		</div>
	)
}

type PhoneProps = {
	value: {
		country_code: string
		number: string
	}
	onChange: (arg: { country_code: string; number: string }) => void
	name: string
	label: string
	isError: boolean
	errorMsg: string
}

const Phone = ({
	value,
	onChange,
	label,
	name,
	isError,
	errorMsg,
}: PhoneProps) => {
	const [selected, setSelected] = useState<{
		img: string
		code: string
		country: string
	}>({
		img: indFlag,
		code: "+91",
		country: "India",
	})
	const [showCountryCodes, setShowCountryCodes] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState("")

	const phoneDummyData = [
		{
			img: indFlag,
			code: "+91",
			country: "India",
		},
		{
			img: ausFlag,
			code: "+201",
			country: "Australia",
		},
	]

	useEffect(() => {
		let timeout = setTimeout(() => {
			onChange({ country_code: selected.code, number: phoneNumber })
		}, 400)
		return () => clearTimeout(timeout)
	}, [selected.code, phoneNumber])

	return (
		<div>
			<div
				className={`flex items-center gap-2 relative bg-transparent rounded-[43px] border-[1px] appearance-none focus:outline-none focus:ring-0 ${
					isError ? "border-red-600" : "border-gray-300 focus:border-blue-600"
				}`}
			>
				<div
					onClick={() => setShowCountryCodes((prev) => !prev)}
					className="w-14 ml-4 h-full flex items-start gap-2 cursor-pointer"
				>
					<div className="w-[28px] h-[18px] overflow-hidden">
						<img className="w-full, h-full object-cover" src={selected?.img} />
					</div>
					<IoIosArrowDown
						className={`text-slate-700 duration-300 ${
							showCountryCodes ? "rotate-180" : "rotate-0"
						}`}
					/>
				</div>
				{showCountryCodes && (
					<div className="bg-white absolute top-12 w-48 z-50 shadow-lg shadow-[rgba(0, 0, 0, 0.1)] py-3">
						{phoneDummyData.map((item, idx) => (
							<div
								key={idx}
								onClick={() => {
									setSelected(item)
									setShowCountryCodes(false)
								}}
								className="flex items-center gap-3 cursor-pointer duration-200 hover:bg-gray-400/20 px-5 py-2"
							>
								<div className="w-[28px] h-[18px] overflow-hidden">
									<img className="w-full, h-full object-cover" src={item.img} />
								</div>
								<span className="text-sm text-black">{item.country}</span>
								<span className="text-sm font-medium text-[#6E7278]">
									{item.code}
								</span>
							</div>
						))}
					</div>
				)}
				<input
					name={name}
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					type="number"
					id={name}
					className={`block pl-1 pr-6 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-[43px]   appearance-none focus:outline-none focus:ring-0 peer`}
					placeholder=" "
				/>

				<label
					htmlFor={name}
					className={`absolute text-sm   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:left-4 peer-focus:scale-75 peer-focus:-translate-y-4 ${
						phoneNumber ? "left-[1rem]" : "left-[4.5rem]"
					} ${
						isError ? "text-red-500" : "text-gray-500 peer-focus:text-blue-600"
					}`}
				>
					{label}
				</label>
			</div>
			{isError && (
				<p
					id="outlined_error_help"
					className="mt-1 pl-3 text-xs text-red-600 dark:text-red-400"
				>
					{errorMsg}
				</p>
			)}
		</div>
	)
}

const Input = {
	Base,
	Password,
	Phone,
}

export default Input
