import { useMovies } from "../hooks/useMovies"
import BookmarkEmptyIcon from "./icons/BookmarkEmptyIcon"
import BookmarkFullIcon from "./icons/BookmarkFullIcon"
import TvseriesIcon from "./icons/TvseriesIcon"
import MoviesIcon from "./icons/MoviesIcon"
import PlayIcon from "./icons/PlayIcon"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function MovieCardTrending({ item }) {
	const { allData, setAllData } = useMovies()
	const handleChangeIsBookmarked = () => {
		// filter movie from array allData
		const filteredItem = allData.filter(
			(element) => item.title === element.title
		)
		// find the index of the movie in the array allData
		const indexOfFilteredItem = allData.indexOf(filteredItem[0])

		const newAllData = allData.map((element, index) => {
			if (index === indexOfFilteredItem) {
				if (!element.isBookmarked) {
					return { ...element, isBookmarked: true }
				} else {
					return { ...element, isBookmarked: false }
				}
			} else {
				return element
			}
		})
		setAllData(newAllData)
	}
	return (
		<li className="relative z-10">
			<div className="overflow-hidden h-full rounded-xl w-[240px] sm:w-[470px] sm:h-[230px]">
				<LazyLoadImage
					className="relative z-30 sm:hidden"
					src={item.thumbnail.trending.small}
					alt={item.title}
				/>
				<LazyLoadImage
					className="hidden relative z-30 sm:block"
					src={item.thumbnail.trending.large}
					alt={item.title}
				/>
				<button
					onClick={handleChangeIsBookmarked}
					className="inline-block absolute top-2 right-2 z-40 sm:top-4 sm:right-4"
					aria-label="button"
					type="button"
				>
					{item.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
				</button>
				<div className="absolute bottom-4 left-4 z-40">
					<ul className="flex items-center font-light opacity-75 text-[12px] gap-[6px] sm:text-[15px]">
						<li>{item.year}</li>
						<li className="bg-white rounded-full opacity-50 w-[3px] h-[3px]"></li>
						<li className="opacity-75 fill-white">
							{item.category === "Movie" ? <MoviesIcon /> : <TvseriesIcon />}
						</li>
						<li>{item.category}</li>
						<li className="bg-white rounded-full opacity-30 w-[3px] h-[3px]"></li>
						<li>{item.rating}</li>
					</ul>
					<h3 className="text-white sm:text-[24px]">{item.title}</h3>
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
