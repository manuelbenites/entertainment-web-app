import movies from "../../data.json"
import BookmarkEmptyIcon from "../components/icons/BookmarkEmptyIcon"
import { useState } from "react"
import SearchIcon from "../components/icons/SearchIcon"

export default function Home() {
	const [movieToFind, setMovieToFind] = useState("")
	const chars = movieToFind.toLowerCase().split("")
	const [isSearchActive, setIsSearchActive] = useState(false)
	const handleChangeFilter = (e) => {
		const filterValue = e.target.value
		const filterLength = e.target.value.length
		setMovieToFind(filterValue)
		filterLength > 0 ? setIsSearchActive(true) : setIsSearchActive(false)
	}
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
			{isSearchActive && (
				<ul className="grid grid-cols-2 mb-6">
					{movies &&
						movies
							.filter((movie) =>
								chars.every((char) => movie.title.toLowerCase().match(char))
							)
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
			{!isSearchActive && (
				<>
					<section className="mb-6">
						<h2 className="mb-4 font-light text-[20px]">Trending</h2>
						<ul className="flex overflow-scroll gap-4 scroll-auto">
							{movies
								.filter((movie) => movie.isTrending)
								.map((filteredmovie, index) => (
									<li key={index} className="relative z-10">
										<div className="overflow-hidden h-full rounded-xl w-[240px]">
											<img src={filteredmovie.thumbnail.trending.small} />
											<button className="inline-block absolute top-2 right-2">
												<div className="flex relative justify-center items-center w-8 h-8">
													<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
													<BookmarkEmptyIcon />
												</div>
											</button>
											<div className="absolute bottom-4 left-4 z-20">
												<ul className="flex opacity-75">
													<li>{filteredmovie.year}</li>
													<li>{filteredmovie.category}</li>
													<li>{filteredmovie.rating}</li>
												</ul>
												<h3 className="text-white">{filteredmovie.title}</h3>
											</div>
										</div>
									</li>
								))}
						</ul>
					</section>
					<section className="">
						<h2 className="mb-4 font-light text-[20px]">Recommended for you</h2>
						<ul className="grid grid-cols-2 gap-[15px]">
							{movies.map((movie, index) => (
								<li key={index}>
									<div className="overflow-hidden relative mb-2 rounded-md w-[164px]">
										<img src={movie.thumbnail.regular.small} />
										<button className="inline-block absolute top-2 right-2">
											<div className="flex relative justify-center items-center w-8 h-8">
												<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
												<BookmarkEmptyIcon />
											</div>
										</button>
									</div>
									<ul className="flex mb-1 opacity-75 text-[11px]">
										<li>{movie.year}</li>
										<li>{movie.category}</li>
										<li>{movie.rating}</li>
									</ul>
									<h3 className="text-sm font-medium">{movie.title}</h3>
								</li>
							))}
						</ul>
					</section>
				</>
			)}
		</main>
	)
}
