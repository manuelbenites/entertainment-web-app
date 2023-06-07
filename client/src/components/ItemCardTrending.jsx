import { useMovies } from "../hooks/useMovies"
import BookmarkEmptyIcon from "./icons/BookmarkEmptyIcon"
import BookmarkFullIcon from "./icons/BookmarkFullIcon"

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
			<div className="overflow-hidden h-full rounded-xl w-[240px]">
				<img src={item.thumbnail.trending.small} />
				<button
					onClick={handleChangeIsBookmarked}
					className="inline-block absolute top-2 right-2"
				>
					<div className="flex relative justify-center items-center w-8 h-8">
						<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
						{item.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
					</div>
				</button>
				<div className="absolute bottom-4 left-4 z-20">
					<ul className="flex opacity-75">
						<li>{item.year}</li>
						<li>{item.category}</li>
						<li>{item.rating}</li>
					</ul>
					<h3 className="text-white">{item.title}</h3>
				</div>
			</div>
		</li>
	)
}
