import { useState } from "react"
import { filterArrayItems } from "../lib/utils"

import BookmarkEmptyIcon from "../components/icons/BookmarkEmptyIcon"
import SearchIcon from "../components/icons/SearchIcon"

import data from "../../data.json"

function ListSearchResult({ itemToSearch, moviesOrTvSeries }) {
	return (
		<section>
			{itemToSearch.length >= 1 && (
				<ul className="grid grid-cols-2 mb-6">
					{
						filterArrayItems(moviesOrTvSeries, itemToSearch)
							.map((filteredmovie, index) => (
								<li key={index}>
									<div className="overflow-hidden relative mb-2 rounded-md w-[164px]">
										<img src={filteredmovie.thumbnail.regular.small} />
										<button className="inline-block absolute top-2 right-2">
											<div className="flex relative justify-center items-center w-8 h-8">
												<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
												<BookmarkEmptyIcon />
											</div>
										</button>
									</div>
									<ul className="flex mb-1 opacity-75 text-[11px]">
										<li>{filteredmovie.year}</li>
										<li>{filteredmovie.category}</li>
										<li>{filteredmovie.rating}</li>
									</ul>
									<h3 className="text-sm font-medium">{filteredmovie.title}</h3>
								</li>
							))}
				</ul>
			)}
		</section>
	)
}

function HomeDashBoard({ itemToSearch, moviesOrTvSeries }) {
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
									<li key={index} className="relative z-10">
										<div className="overflow-hidden h-full rounded-xl w-[240px]">
											<img src={filteredMovieOrTvSerie.thumbnail.trending.small} />
											<button className="inline-block absolute top-2 right-2">
												<div className="flex relative justify-center items-center w-8 h-8">
													<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
													<BookmarkEmptyIcon />
												</div>
											</button>
											<div className="absolute bottom-4 left-4 z-20">
												<ul className="flex opacity-75">
													<li>{filteredMovieOrTvSerie.year}</li>
													<li>{filteredMovieOrTvSerie.category}</li>
													<li>{filteredMovieOrTvSerie.rating}</li>
												</ul>
												<h3 className="text-white">{filteredMovieOrTvSerie.title}</h3>
											</div>
										</div>
									</li>
								))}
						</ul>
					</div>
					<div className="">
						<h2 className="mb-4 font-light text-[20px]">Recommended for you</h2>
						<ul className="grid grid-cols-2 gap-[15px]">
							{moviesOrTvSeries.map((movieOrTvSerie, index) => (
								<li key={index}>
									<div className="overflow-hidden relative mb-2 rounded-md w-[164px]">
										<img src={movieOrTvSerie.thumbnail.regular.small} />
										<button className="inline-block absolute top-2 right-2">
											<div className="flex relative justify-center items-center w-8 h-8">
												<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
												<BookmarkEmptyIcon />
											</div>
										</button>
									</div>
									<ul className="flex mb-1 opacity-75 text-[11px]">
										<li>{movieOrTvSerie.year}</li>
										<li>{movieOrTvSerie.category}</li>
										<li>{movieOrTvSerie.rating}</li>
									</ul>
									<h3 className="text-sm font-medium">{movieOrTvSerie.title}</h3>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</section>
	)
}

export default function Home() {
	const moviesOrTvSeries = data
	const [itemToSearch, setItemToSearch] = useState("")
	const handleChangeFilter = (e) => {
		setItemToSearch(e.target.value)
	};

	return (
		<main className="px-4">
			<form className="flex flex-row-reverse gap-4 justify-end items-center mb-6">
				<input
					className="font-light border-none outline-none bg-inherit"
					placeholder="Search for movies or TV series"
					name="filter"
					onChange={handleChangeFilter}
				/>
				<button type="button">
					<SearchIcon />
				</button>
			</form>
			<ListSearchResult moviesOrTvSeries={moviesOrTvSeries} itemToSearch={itemToSearch} />
			<HomeDashBoard moviesOrTvSeries={moviesOrTvSeries} itemToSearch={itemToSearch} />
		</main>
	)
}
