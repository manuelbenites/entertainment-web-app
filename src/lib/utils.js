export const filterArrayItems = (array, itemToSearch) => {
	const itemToSearchChars = itemToSearch.toLowerCase().split("")
	return array
		.filter((arrItem) =>
			itemToSearchChars.every((char) => arrItem.title.toLowerCase().match(char))
		)
}
