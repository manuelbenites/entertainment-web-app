import data from "../../data.json"
import { createContext, useState } from "react"

export const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {
	const [allData, setAllData] = useState(data)
	const initialState = { allData, setAllData }
	return (
		<MovieContext.Provider value={initialState}>
			{children}
		</MovieContext.Provider>
	)
}
