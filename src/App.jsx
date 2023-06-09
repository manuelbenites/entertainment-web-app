import Home from "./pages/Home"
import Layout from "./components/Layout"
import Movies from "./pages/Movies"
import Tvseries from "./pages/Tvseries"
import Bookmarked from "./pages/Bookmarked"

import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="tvseries" element={<Tvseries />} />
					<Route path="bookmarked" element={<Bookmarked />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
