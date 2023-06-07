import InitialContent from "../components/InitialContent"
import ListSearchResult from "../components/ListSearchResult"
import Search from "../components/Search"
import { useMovies } from "../hooks/useMovies"
import { useSearch } from "../hooks/useSearch"

const CATEGORY_PAGE_TVSERIES = "TV Series"

export default function Tvseries() {
	const { allData } = useMovies()
	const tvseries = allData
		.filter((item) => item.category == CATEGORY_PAGE_TVSERIES)
		.sort()
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
