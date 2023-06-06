import BookmarkEmptyIcon from "./icons/BookmarkEmptyIcon"
import BookmarkFullIcon from "./icons/BookmarkFullIcon"

export default function MovieCardTrending({ item }) {
	return (
		<li className="relative z-10">
			<div className="overflow-hidden h-full rounded-xl w-[240px]">
				<img src={item.thumbnail.trending.small} />
				<button className="inline-block absolute top-2 right-2">
					<div className="flex relative justify-center items-center w-8 h-8">
						<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
						{item.isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
					</div>
				</button>
				<div className="absolute bottom-4 left-4 z-20">
					<ul className="flex opacity-75">
						<li>{item.year}</li>
						<li>{item.category}</li>
						<li>{item.rating}</li>
					</ul>
					<h3 className="text-white">{item.title}</h3>
				</div>
			</div>
		</li>
	)
}
