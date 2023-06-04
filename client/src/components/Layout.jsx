import { Link, Outlet } from "react-router-dom"
import BookmarkIcon from "./icons/BookmarkIcon"
import HomeIcon from "./icons/HomeIcon"
import Logo from "./icons/Logo"
import MoviesIcon from "./icons/MoviesIcon"
import TvseriesIcon from "./icons/TvseriesIcon"
import CustomLink from "./CustomLink"

export default function Layout() {
	return (
		<>
			<header className="h-14 mb-6 flex items-center bg-[#161d2f] px-4">
				<nav className="flex gap-2 justify-between items-center w-full">
					<Link to="/">
						<Logo className="fill-[#FC4747]" />
					</Link>
					<ul className="flex gap-6">
						<li>
							<CustomLink to="/">
								<HomeIcon />
							</CustomLink>
						</li>
						<li>
							<CustomLink to="/movies">
								<MoviesIcon />
							</CustomLink>
						</li>
						<li>
							<CustomLink to="/tvseries">
								<TvseriesIcon />
							</CustomLink>
						</li>
						<li>
							<CustomLink to="/bookmarked">
								<BookmarkIcon />
							</CustomLink>
						</li>
					</ul>
					<div>
						<div className="w-6 h-6 rounded-full border-2 border-white"></div>
					</div>
				</nav>
			</header>
			<Outlet />
		</>
	)
}
