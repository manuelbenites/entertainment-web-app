import data from "../../data.json"
import { useState } from "react"

const CATEGORY_PAGE_MOVIES = "Movie"
const CATEGORY_PAGE_TVSERIES = "TV Series"

export default function useMoviesSeriesBookmarked() {
	const [allData, setAllData] = useState(data)
	const movies = allData.filter((item) => item.category == CATEGORY_PAGE_MOVIES)
	const tvseries = allData.filter(
		(item) => item.category == CATEGORY_PAGE_TVSERIES
	)
	const bookmarkedShows = allData.filter((item) => item.isBookmarked)
	const bookmarkedTvseries = allData.filter(
		(item) => item.isBookmarked && item.category == CATEGORY_PAGE_TVSERIES
	)
	const bookmarkedMovies = allData.filter(
		(item) => item.isBookmarked && item.category == CATEGORY_PAGE_MOVIES
	)
	const trendingMovies = allData.filter((item) => item.isTrending)

	return {
		allData,
		setAllData,
		movies,
		tvseries,
		trendingMovies,
		bookmarkedShows,
		bookmarkedMovies,
		bookmarkedTvseries,
	}
}
