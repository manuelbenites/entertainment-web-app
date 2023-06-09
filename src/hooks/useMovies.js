import { MovieContext } from "../context/MovieContext"
import { useContext } from "react"

export const useMovies = () => {
	const context = useContext(MovieContext)
	return context
}
