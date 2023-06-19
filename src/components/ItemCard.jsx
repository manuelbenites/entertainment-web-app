import MoviesIcon from "./icons/MoviesIcon"
import TvseriesIcon from "./icons/TvseriesIcon"
import PlayIcon from "./icons/PlayIcon"
import ButtonBookmarked from "./ButtonBookmarked"

export default function ItemCard({ item }) {
	return (
		<li>
			<div className="overflow-hidden relative mb-2 w-full rounded-md">
				<div className="sm:hidden">
					<img src={item.thumbnail.regular.small} alt={item.title} />
				</div>
				<div className="hidden sm:block lg:hidden">
					<img src={item.thumbnail.regular.medium} alt={item.title} />
				</div>
				<div className="hidden lg:block">
					<img src={item.thumbnail.regular.large} alt={item.title} />
				</div>
				<ButtonBookmarked item={item} />
				<div className="flex absolute top-0 z-30 justify-center items-center w-full h-full opacity-0 transition-opacity cursor-pointer hover:bg-black hover:bg-opacity-50 hover:opacity-100">
					<div className="flex relative z-50 items-center bg-white bg-opacity-25 rounded-full w-[117px] h-[48px] p-[9px]">
						<PlayIcon />
						<h2 className="ml-[20px]">Play</h2>
					</div>
				</div>
			</div>
			<div className="flex mb-1 font-light opacity-75 text-[11px] sm:text-[13px]">
				<ul className="flex gap-2 items-center font-light opacity-75">
					<li>{item.year}</li>
					<li className="bg-white rounded-full opacity-50 w-[3px] h-[3px]"></li>
					<li className="opacity-75 fill-white">
						{item.category === "Movie" ? <MoviesIcon /> : <TvseriesIcon />}
					</li>
					<li>{item.category}</li>
					<li className="bg-white rounded-full opacity-50 w-[3px] h-[3px]"></li>
					<li>{item.rating}</li>
				</ul>
			</div>
			<h3 className="text-sm font-medium sm:text-[18px]">{item.title}</h3>
		</li>
	)
}
