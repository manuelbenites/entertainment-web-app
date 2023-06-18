import CustomLink from "./CustomLink"
import BookmarkIcon from "./icons/BookmarkIcon"
import HomeIcon from "./icons/HomeIcon"
import MoviesIcon from "./icons/MoviesIcon"
import TvseriesIcon from "./icons/TvseriesIcon"

export default function Links({ flexCol = "" }) {
	return (
		<ul className={`flex ${flexCol} gap-6`}>
			<li>
				<CustomLink to="/" arial-label="Redirect to Home Page">
					<HomeIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
			<li>
				<CustomLink to="/movies" arial-label="Redirect to Movies Page">
					<MoviesIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
			<li>
				<CustomLink to="/tvseries" arial-label="Redirect to TvSeries Page">
					<TvseriesIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
			<li>
				<CustomLink to="/bookmarked" arial-label="Redirect to bookmarked Page">
					<BookmarkIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
		</ul>
	)
}
