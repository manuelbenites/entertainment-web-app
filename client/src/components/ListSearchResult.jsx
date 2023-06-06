import { filterArrayItems } from "../lib/utils"
import BookmarkEmptyIcon from "./icons/BookmarkEmptyIcon"

export default function ListSearchResult({ itemToSearch, arrWhereToSearch }) {
	return (
		<>
			<section>
				{itemToSearch.length > 0 && (
					<ul className="grid grid-cols-2 mb-6">
						{filterArrayItems(arrWhereToSearch, itemToSearch).map(
							(item, index) => (
								<li key={index}>
									<div className="overflow-hidden relative mb-2 rounded-md w-[164px]">
										<img src={item.thumbnail.regular.small} />
										<button className="inline-block absolute top-2 right-2">
											<div className="flex relative justify-center items-center w-8 h-8">
												<div className="h-full w-full absolute rounded-full bg-[#10141e] opacity-50"></div>
												<BookmarkEmptyIcon />
											</div>
										</button>
									</div>
									<ul className="flex mb-1 opacity-75 text-[11px]">
										<li>{item.year}</li>
										<li>{item.category}</li>
										<li>{item.rating}</li>
									</ul>
									<h3 className="text-sm font-medium">{item.title}</h3>
								</li>
							)
						)}
					</ul>
				)}
			</section>
		</>
	)
}
