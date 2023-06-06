import ItemCard from "./ItemCard"

export default function InitialContent({ itemToSearch, arrToShow, titlePage }) {
	return (
		<>
			{itemToSearch.length == 0 && (
				<section>
					<h2 className="mb-6 font-light text-[20px]">{titlePage}</h2>
					<ul className="grid grid-cols-2 gap-[15px]">
						{arrToShow &&
							arrToShow.map((item, index) => (
								<ItemCard key={index} item={item} />
							))}
					</ul>
				</section>
			)}
		</>
	)
}
