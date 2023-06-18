import ItemCard from "../components/ItemCard"
import ListSearchResult from "../components/ListSearchResult"
import Search from "../components/Search"
import { useMovies } from "../hooks/useMovies"
import { useSearch } from "../hooks/useSearch"

const CATEGORY_PAGE_MOVIES = "Movie"
const CATEGORY_PAGE_TVSERIES = "TV Series"
const BOOKMARKED_SEARCH_PLACEHOLDER = "Search for bookmarked shows"

function BookmarkedMoviesSection({ bookmarkedMovies }) {
	return (
		<section>
			<h2 className="mb-6 font-light text-[20px] sm:text-[32px]">
				Bookmarked Movies
			</h2>
			<ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] sm:gap-[25px]">
				{bookmarkedMovies &&
					bookmarkedMovies.map((bookmarkedMovie, index) => (
						<ItemCard key={index} item={bookmarkedMovie} />
					))}
			</ul>
		</section>
	)
}

function BookmarkedTVseriesSection({ bookmarkedTVseries }) {
	return (
		<section className="mt-6">
			<h2 className="mb-6 font-light text-[20px] sm:text-[32px]">
				Bookmarked Movies
			</h2>
			<ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] sm:gap-[25px]">
				{bookmarkedTVseries &&
					bookmarkedTVseries.map((bookmarkedMovie, index) => (
						<ItemCard key={index} item={bookmarkedMovie} />
					))}
			</ul>
		</section>
	)
}

function BookmarkedInitalContent({
	itemToSearch,
	bookmarkedMovies,
	bookmarkedTvseries,
}) {
	return (
		<>
			{itemToSearch.length == 0 && (
				<>
					<BookmarkedMoviesSection bookmarkedMovies={bookmarkedMovies} />
					<BookmarkedTVseriesSection bookmarkedTVseries={bookmarkedTvseries} />
				</>
			)}
		</>
	)
}

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
