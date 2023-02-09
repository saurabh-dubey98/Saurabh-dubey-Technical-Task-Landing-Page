import { Link } from "react-router-dom"
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialTwitter,
} from "react-icons/ti"

const Footer = () => {
	return (
		<footer className="-ml-24 -mr-24 min-w-full bg-[#FC648C] h-[5rem] flex items-center">
			<div className="px-24 flex justify-between w-full">
				<div className="flex flex-col">
					<Link to="/" className="text-white text-2xl">
						OPT<span className="font-bold">IVF</span>
					</Link>
					<span className="text-white text-xs">
						© loremipsum 2023. All rights reserved.
					</span>
				</div>
				<div className="flex items-center">
					<ul className="list-none flex gap-4 items-center text-white text-sm">
						<li>
							<Link className="hover:text-white/70" to="#">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link className="hover:text-white/70" to="#">
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link className="hover:text-white/70" to="#">
								About Us
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex items-center">
					<ul className="list-none flex gap-4 items-center">
						<li>
							<Link to="#">
								<TiSocialFacebook className="text-white hover:text-white/70 w-6 h-6" />
							</Link>
						</li>
						<li>
							<Link to="#">
								<TiSocialTwitter className="text-white hover:text-white/70 w-6 h-6" />
							</Link>
						</li>
						<li>
							<Link to="#">
								<TiSocialInstagram className="text-white hover:text-white/70 w-6 h-6" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
