import { useState } from "react"
import SearchIcon from "./icons/SearchIcon"

export default function Search() {
	const [itemToSearch, setItemToSearch] = useState("")
	const handleChangeFilter = (e) => {
		setItemToSearch(e.target.value)
	}
	return (
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
	)
}
