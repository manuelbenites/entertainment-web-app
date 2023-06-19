import BookmarkEmptyIcon from "./icons/BookmarkEmptyIcon"
import BookmarkFullIcon from "./icons/BookmarkFullIcon"
import { useMovies } from "../hooks/useMovies"

export default function ButtonBookmarked({ item }) {
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
		<button
			onClick={handleChangeIsBookmarked}
			className="inline-block absolute top-2 right-2 z-40 sm:top-4 sm:right-4"
			aria-label="button"
		>
			{item.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
		</button>
	)
}
