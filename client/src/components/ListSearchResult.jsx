import { filterArrayItems } from "../lib/utils"
import ItemCard from "./ItemCard"

export default function ListSearchResult({ itemToSearch, arrWhereToSearch }) {
	return (
		<>
			<section>
				{itemToSearch.length > 0 && (
					<ul className="grid grid-cols-2 mb-6">
						{filterArrayItems(arrWhereToSearch, itemToSearch).map(
							(item, index) => (
								<ItemCard key={index} item={item} />
							)
						)}
					</ul>
				)}
			</section>
		</>
	)
}
