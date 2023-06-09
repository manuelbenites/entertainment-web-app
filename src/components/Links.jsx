import CustomLink from "./CustomLink"
import BookmarkIcon from "./icons/BookmarkIcon"
import HomeIcon from "./icons/HomeIcon"
import MoviesIcon from "./icons/MoviesIcon"
import TvseriesIcon from "./icons/TvseriesIcon"

export default function Links({ flexCol = "" }) {
	return (
		<ul className={`flex ${flexCol} gap-6`}>
			<li>
				<CustomLink to="/">
					<HomeIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
			<li>
				<CustomLink to="/movies">
					<MoviesIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
			<li>
				<CustomLink to="/tvseries">
					<TvseriesIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
			<li>
				<CustomLink to="/bookmarked">
					<BookmarkIcon className="hover:fill-[#FC4747] transition-colors" />
				</CustomLink>
			</li>
		</ul>
	)
}
