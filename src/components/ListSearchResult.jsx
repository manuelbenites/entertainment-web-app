import { filterArrayItems } from "../lib/utils"
import ItemCard from "./ItemCard"

export default function ListSearchResult({ itemToSearch, arrWhereToSearch }) {
	return (
		<section>
			{itemToSearch.length > 0 && (
				<>
					<h2 className="font-light text-[20px] mb-[24px] sm:text-[32px]">
						Found {filterArrayItems(arrWhereToSearch, itemToSearch).length}{" "}
						results for &quot;{itemToSearch}&quot;
					</h2>
					<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[15px] sm:gap-[25px]">
						{filterArrayItems(arrWhereToSearch, itemToSearch).map(
							(item, index) => (
								<ItemCard key={index} item={item} />
							)
						)}
					</ul>
				</>
			)}
		</section>
	)
}
