import data from "../../data.json"

const CATEGORY_PAGE_MOVIES = "Movie"
const CATEGORY_PAGE_TVSERIES = "TV Series"

export default function useMoviesSeriesBookmarked() {

	const movies = data.filter((item) => item.category == CATEGORY_PAGE_MOVIES)
	const tvseries = data.filter((item) => item.category == CATEGORY_PAGE_TVSERIES)
	const bookmarkers = data.filter((item) => item.isBookmarked)

	return { movies, tvseries, bookmarkers }

}
