import { useSearch } from "../hooks/useSearch"
import Search from "../components/Search"
import ItemCard from "../components/ItemCard"
import ItemCardTrending from "../components/ItemCardTrending"
import ListSearchResult from "../components/ListSearchResult"
import { useMovies } from "../hooks/useMovies"

const HOME_SEARCH_PLACEHOLDER = "Searh for movies or TV series"

function HomeInitialContent({ itemToSearch, moviesOrTvSeries }) {
	return (
		<section>
			{itemToSearch.length == 0 && (
				<>
					<div className="mb-6">
						<p className="mb-4 font-light text-[20px] sm:text-[32px]">
							Trending
						</p>
						<ul className="flex overflow-y-auto relative gap-4 sm:gap-[40px]">
							{moviesOrTvSeries
								.filter((movieOrTvSerie) => movieOrTvSerie.isTrending)
								.map((filteredMovieOrTvSerie, index) => (
									<ItemCardTrending key={index} item={filteredMovieOrTvSerie} />
								))}
						</ul>
					</div>
					<div className="">
						<p className="mb-4 font-light text-[20px] sm:text-[32px]">
							Recommended for you
						</p>
						<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[15px] sm:gap-[25px]">
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
	const { allData } = useMovies()
	const moviesOrTvSeries = allData
	const { itemToSearch, handleChangeFilter } = useSearch()

	return (
		<>
			<Search
				handleChangeFilter={handleChangeFilter}
				placeholder={HOME_SEARCH_PLACEHOLDER}
			/>
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
