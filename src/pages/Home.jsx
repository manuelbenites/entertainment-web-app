import { useSearch } from "../hooks/useSearch"
import Search from "../components/Search"
import ItemCard from "../components/ItemCard"
import ItemCardTrending from "../components/ItemCardTrending"
import ListSearchResult from "../components/ListSearchResult"
import { useMovies } from "../hooks/useMovies"

const HOME_SEARCH_PLACEHOLDER = "Searh for movies or TV series"

function HomeTrendingShows({ moviesOrTvSeries }) {
	return (
		<section className="mb-6">
			<h2 className="mb-4 font-light text-[20px] sm:text-[32px]">Trending</h2>
			<ul className="flex overflow-y-auto relative gap-4 sm:gap-[40px]">
				{moviesOrTvSeries
					.filter((movieOrTvSerie) => movieOrTvSerie.isTrending)
					.map((filteredMovieOrTvSerie, index) => (
						<ItemCardTrending key={index} item={filteredMovieOrTvSerie} />
					))}
			</ul>
		</section>
	)
}

function HomeAllShows({ moviesOrTvSeries }) {
	return (
		<section className="">
			<h2 className="mb-4 font-light text-[20px] sm:text-[32px]">
				Recommended for you
			</h2>
			<ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px] sm:gap-[25px]">
				{moviesOrTvSeries.map((movieOrTvSerie, index) => (
					<ItemCard key={index} index={index} item={movieOrTvSerie} />
				))}
			</ul>
		</section>
	)
}

function HomeInitialContent({ itemToSearch, moviesOrTvSeries }) {
	return (
		<section>
			{itemToSearch.length == 0 && (
				<>
					<HomeTrendingShows moviesOrTvSeries={moviesOrTvSeries} />
					<HomeAllShows moviesOrTvSeries={moviesOrTvSeries} />
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
