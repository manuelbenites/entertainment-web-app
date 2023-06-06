import SearchIcon from "./icons/SearchIcon"

export default function Search({ handleChangeFilter }) {
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
