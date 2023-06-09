import { useState } from "react"

export const useSearch = () => {
	const [itemToSearch, setItemToSearch] = useState("")
	const handleChangeFilter = (e) => {
		setItemToSearch(e.target.value)
	}
	return { itemToSearch, handleChangeFilter }
}
