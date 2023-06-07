import BookmarkEmptyIcon from "./icons/BookmarkEmptyIcon"
import BookmarkFullIcon from "./icons/BookmarkFullIcon"
import { useMovies } from "../hooks/useMovies"

export default function ItemCard({ item }) {
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
		<li>
			<div className="overflow-hidden relative mb-2 rounded-md w-[164px]">
				<img src={item.thumbnail.regular.small} />
				<button
					onClick={handleChangeIsBookmarked}
					className="inline-block absolute top-2 right-2"
				>
					<div className="flex relative justify-center items-center w-8 h-8">
						<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
						{item.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
					</div>
				</button>
			</div>
			<ul className="flex mb-1 opacity-75 text-[11px]">
				<li>{item.year}</li>
				<li>{item.category}</li>
				<li>{item.rating}</li>
			</ul>
			<h3 className="text-sm font-medium">{item.title}</h3>
		</li>
	)
}
