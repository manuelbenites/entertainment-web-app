import TvseriesIcon from "./icons/TvseriesIcon"
import MoviesIcon from "./icons/MoviesIcon"
import PlayIcon from "./icons/PlayIcon"
import ButtonBookmarked from "./ButtonBookmarked"

export default function MovieCardTrending({ item }) {
	return (
		<li className="relative z-10">
			<div className="overflow-hidden relative h-full rounded-xl w-[240px] sm:w-[470px]">
				<div className="relative z-30 sm:hidden">
					<img
						src={item.thumbnail.trending.small}
						alt={item.title}
						width={240}
						loading="lazy"
					/>
				</div>
				<div className="hidden relative z-30 sm:block">
					<img
						src={item.thumbnail.trending.large}
						alt={item.title}
						width={470}
						loading="lazy"
					/>
				</div>
				<ButtonBookmarked item={item} />
				<div className="absolute bottom-0 z-40 w-full bg-gradient-to-t from-black pointer-events-none">
					<ul className="flex items-center pl-4 font-light opacity-75 text-[12px] gap-[6px] sm:text-[15px]">
						<li>{item.year}</li>
						<li className="bg-white rounded-full opacity-50 w-[3px] h-[3px]"></li>
						<li className="opacity-75 fill-white">
							{item.category === "Movie" ? <MoviesIcon /> : <TvseriesIcon />}
						</li>
						<li>{item.category}</li>
						<li className="bg-white rounded-full opacity-30 w-[3px] h-[3px]"></li>
						<li>{item.rating}</li>
					</ul>
					<h3 className="pb-4 pl-4 text-white sm:text-[24px]">{item.title}</h3>
				</div>
				<div className="flex absolute top-0 z-30 justify-center items-center w-full h-full rounded-xl opacity-0 transition-opacity cursor-pointer hover:bg-black hover:bg-opacity-50 hover:opacity-100">
					<div className="flex relative z-50 items-center bg-white bg-opacity-25 rounded-full w-[117px] h-[48px] p-[9px]">
						<PlayIcon />
						<h2 className="ml-[20px]">Play</h2>
					</div>
				</div>
			</div>
		</li>
	)
}
