import SearchIcon from "./icons/SearchIcon"

export default function Search({ handleChangeFilter, placeholder }) {
	return (
		<form className="flex flex-row-reverse gap-4 justify-end items-start mb-6">
			<input
				className="pb-2 w-full font-light outline-none focus:border-b focus:border-[#5A698F] text-[16px] bg-inherit sm:text-[24px]"
				placeholder={placeholder}
				autoComplete="off"
				name="filter"
				onChange={handleChangeFilter}
			/>
			<button type="button">
				<SearchIcon />
			</button>
		</form>
	)
}
