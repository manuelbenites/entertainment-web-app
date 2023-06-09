import InitialContent from "../components/InitialContent"
import ListSearchResult from "../components/ListSearchResult"
import Search from "../components/Search"
import { useMovies } from "../hooks/useMovies"
import { useSearch } from "../hooks/useSearch"

const CATEGORY_PAGE_MOVIES = "Movie"
const MOVIES_SEARCH_PLACEHOLDER = "Search for movies"

export default function Movies() {
	const { allData } = useMovies()
	const movies = allData
		.filter((item) => item.category == CATEGORY_PAGE_MOVIES)
		.sort()
	const { itemToSearch, handleChangeFilter } = useSearch()
	return (
		<>
			<Search
				handleChangeFilter={handleChangeFilter}
				placeholder={MOVIES_SEARCH_PLACEHOLDER}
			/>
			<ListSearchResult itemToSearch={itemToSearch} arrWhereToSearch={movies} />
			<InitialContent
				itemToSearch={itemToSearch}
				arrToShow={movies}
				titlePage={"Movies"}
			/>
		</>
	)
}
