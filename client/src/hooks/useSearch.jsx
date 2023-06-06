import { useState } from "react"

export default function useSearch() {
	const [itemToSearch, setItemToSearch] = useState("")
	const handleChangeFilter = (e) => {
		setItemToSearch(e.target.value)
	}
	return { itemToSearch, handleChangeFilter }
}
