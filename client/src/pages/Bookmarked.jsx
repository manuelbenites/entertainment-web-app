import ItemCard from "../components/ItemCard"
import ListSearchResult from "../components/ListSearchResult"
import Search from "../components/Search"
import useMoviesSeriesBookmarked from "../hooks/useMoviesSeriesBookmarked"
import useSearch from "../hooks/useSearch"

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
						<h2 className="mb-6 font-light text-[20px]">Bookmarked Movies</h2>
						<ul className="grid grid-cols-2 gap-[15px]">
							{bookmarkedMovies &&
								bookmarkedMovies.map((bookmarkedMovie, index) => (
									<ItemCard key={index} item={bookmarkedMovie} />
								))}
						</ul>
					</section>
					<section className="mt-6">
						<h2 className="mb-6 font-light text-[20px]">
							Bookmarked Tv Series
						</h2>
						<ul className="grid grid-cols-2 gap-[15px]">
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

export default function Bookmarked() {
	const { bookmarkedMovies, bookmarkedTvseries, bookmarkedShows } =
		useMoviesSeriesBookmarked()
	const { itemToSearch, handleChangeFilter } = useSearch()
	return (
		<>
			<Search handleChangeFilter={handleChangeFilter} />
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
