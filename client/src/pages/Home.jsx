import useSearch from "../hooks/useSearch"
import Search from "../components/Search"
import ItemCard from "../components/ItemCard"
import ItemCardTrending from "../components/ItemCardTrending"
import ListSearchResult from "../components/ListSearchResult"
import useMoviesSeriesBookmarked from "../hooks/useMoviesSeriesBookmarked"

function HomeInitialContent({ itemToSearch, moviesOrTvSeries }) {
	return (
		<section>
			{itemToSearch.length == 0 && (
				<>
					<div className="mb-6">
						<h2 className="mb-4 font-light text-[20px]">Trending</h2>
						<ul className="flex overflow-scroll gap-4 scroll-auto">
							{moviesOrTvSeries
								.filter((movieOrTvSerie) => movieOrTvSerie.isTrending)
								.map((filteredMovieOrTvSerie, index) => (
									<ItemCardTrending key={index} item={filteredMovieOrTvSerie} />
								))}
						</ul>
					</div>
					<div className="">
						<h2 className="mb-4 font-light text-[20px]">Recommended for you</h2>
						<ul className="grid grid-cols-2 gap-[15px]">
							{moviesOrTvSeries.map((movieOrTvSerie, index) => (
								<ItemCard key={index} item={movieOrTvSerie} />
							))}
						</ul>
					</div>
				</>
			)}
		</section>
	)
}

export default function Home() {
	const { allData } = useMoviesSeriesBookmarked()
	const moviesOrTvSeries = allData
	const { itemToSearch, handleChangeFilter } = useSearch()

	return (
		<>
			<Search handleChangeFilter={handleChangeFilter} />
			<ListSearchResult
				itemToSearch={itemToSearch}
				arrWhereToSearch={moviesOrTvSeries}
			/>
			<HomeInitialContent
				moviesOrTvSeries={moviesOrTvSeries}
				itemToSearch={itemToSearch}
			/>
		</>
	)
}
