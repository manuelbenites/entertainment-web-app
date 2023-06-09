import { Link, Outlet } from "react-router-dom"
import Logo from "./icons/Logo"
import Links from "./Links"

export default function Layout() {
	return (
		<>
			<header className="flex fixed top-0 z-40 items-center w-full bg-[#10141e] lg:hidden">
				<nav className="h-14 sm:h-[72px] flex gap-2 justify-between items-center w-full px-4 bg-[#161d2f] sm:px-6 sm:my-6 sm:mx-6 sm:rounded-xl">
					<Link to="/">
						<Logo className="fill-[#FC4747]" />
					</Link>
					<Links />
					<div className="w-6 h-6 rounded-full border-2 border-white sm:w-8 sm:h-8">
						<img src="/image-avatar.png" alt="image avatar" />
					</div>
				</nav>
			</header>
			<aside className="hidden fixed left-0 lg:inline-block pl-[32px] pt-[32px]">
				<nav className="flex flex-col items-center min-h-[690px] overflow-y-auto rounded-xl py-[32px] w-[96px] bg-[#161d2f]">
					<Link to="/">
						<Logo className="fill-[#FC4747]" />
					</Link>
					<div className="w-full h-[70px]"></div>
					<Links flexCol="flex-col" />
					<div className="mt-auto w-10 h-10 rounded-full border-2 border-white">
						<img src="/image-avatar.png" alt="image avatar" />
					</div>
				</nav>
			</aside>
			<main className="relative z-20 px-4 pb-16 sm:px-6 lg:px-8 pt-[80px] sm:pt-[130px] lg:ml-[132px] lg:pt-[60px]">
				<Outlet />
			</main>
		</>
	)
}
