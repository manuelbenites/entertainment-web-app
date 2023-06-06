import InitialContent from "../components/InitialContent"
import ListSearchResult from "../components/ListSearchResult"
import Search from "../components/Search"
import useMoviesSeriesBookmarked from "../hooks/useMoviesSeriesBookmarked"
import useSearch from "../hooks/useSearch"

export default function Movies() {
	const { movies } = useMoviesSeriesBookmarked()
	const { itemToSearch, handleChangeFilter } = useSearch()
	return (
		<>
			<Search handleChangeFilter={handleChangeFilter} />
			<ListSearchResult itemToSearch={itemToSearch} arrWhereToSearch={movies} />
			<InitialContent
				itemToSearch={itemToSearch}
				arrToShow={movies}
				titlePage={"Movies"}
			/>
		</>
	)
}
