import InitialContent from "../components/InitialContent"
import ListSearchResult from "../components/ListSearchResult"
import Search from "../components/Search"
import useMoviesSeriesBookmarked from "../hooks/useMoviesSeriesBookmarked"
import useSearch from "../hooks/useSearch"

export default function Tvseries() {
	const { tvseries } = useMoviesSeriesBookmarked()
	const { itemToSearch, handleChangeFilter } = useSearch()
	return (
		<>
			<Search handleChangeFilter={handleChangeFilter} />
			<ListSearchResult
				itemToSearch={itemToSearch}
				arrWhereToSearch={tvseries}
			/>
			<InitialContent
				itemToSearch={itemToSearch}
				arrToShow={tvseries}
				titlePage={"Tv Series"}
			/>
		</>
	)
}
