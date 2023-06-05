import BookmarkEmptyIcon from "../components/icons/BookmarkEmptyIcon"
import useMoviesSeriesBookmarked from "../hooks/useMoviesSeriesBookmarked"

export default function Bookmarked() {
	const { bookmarkers } = useMoviesSeriesBookmarked()
	return (
		<section className="px-4">
			<ul className="grid grid-cols-2 gap-[15px]">
				{bookmarkers &&
					bookmarkers
						.map((bookmarker, index) => (
							<li key={index}>
								<div className="overflow-hidden relative mb-2 rounded-md w-[164px]">
									<img src={bookmarker.thumbnail.regular.small} />
									<button className="inline-block absolute top-2 right-2">
										<div className="flex relative justify-center items-center w-8 h-8">
											<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
											<BookmarkEmptyIcon />
										</div>
									</button>
								</div>
								<ul className="flex mb-1 opacity-75 text-[11px]">
									<li>{bookmarker.year}</li>
									<li>{bookmarker.category}</li>
									<li>{bookmarker.rating}</li>
								</ul>
								<h3 className="text-sm font-medium">{bookmarker.title}</h3>
							</li>
						))}
			</ul>
		</section>
	)
}
