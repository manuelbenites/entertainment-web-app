import ItemCard from "../components/ItemCard"
import ListSearchResult from "../components/ListSearchResult"
import Search from "../components/Search"
import { useMovies } from "../hooks/useMovies"
import { useSearch } from "../hooks/useSearch"

function BookmarkedInitalContent({
	itemToSearch,
	bookmarkedMovies,
	bookmarkedTvseries,
}) {
	return (
		<>
			{itemToSearch.length == 0 && (
				<>
					<section>
						<h2 className="mb-6 font-light text-[20px] sm:text-[32px]">
							Bookmarked Movies
						</h2>
						<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[15px] sm:gap-[25px]">
							{bookmarkedMovies &&
								bookmarkedMovies.map((bookmarkedMovie, index) => (
									<ItemCard key={index} item={bookmarkedMovie} />
								))}
						</ul>
					</section>
					<section className="mt-6">
						<h2 className="mb-6 font-light text-[20px] sm:text-[32px]">
							Bookmarked Tv Series
						</h2>
						<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[15px] sm:gap-[25px]">
							{bookmarkedTvseries &&
								bookmarkedTvseries.map((bookmarkedTvserie, index) => (
									<ItemCard key={index} item={bookmarkedTvserie} />
								))}
						</ul>
					</section>
				</>
			)}
		</>
	)
}

const CATEGORY_PAGE_MOVIES = "Movie"
const CATEGORY_PAGE_TVSERIES = "TV Series"
const BOOKMARKED_SEARCH_PLACEHOLDER = "Search for bookmarked shows"

export default function Bookmarked() {
	const { allData } = useMovies()
	const bookmarkedShows = allData.filter((item) => item.isBookmarked).sort()
	const bookmarkedTvseries = allData
		.filter(
			(item) => item.isBookmarked && item.category == CATEGORY_PAGE_TVSERIES
		)
		.sort()
	const bookmarkedMovies = allData
		.filter(
			(item) => item.isBookmarked && item.category == CATEGORY_PAGE_MOVIES
		)
		.sort()
	const { itemToSearch, handleChangeFilter } = useSearch()
	return (
		<>
			<Search
				handleChangeFilter={handleChangeFilter}
				placeholder={BOOKMARKED_SEARCH_PLACEHOLDER}
			/>
			<ListSearchResult
				itemToSearch={itemToSearch}
				arrWhereToSearch={bookmarkedShows}
			/>
			<BookmarkedInitalContent
				itemToSearch={itemToSearch}
				bookmarkedMovies={bookmarkedMovies}
				bookmarkedTvseries={bookmarkedTvseries}
			/>
		</>
	)
}