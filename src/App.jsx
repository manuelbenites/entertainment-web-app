import { Suspense, lazy } from "react"

const Layout = lazy(() => import("./components/Layout.jsx"))
const Home = lazy(() => import("./pages/Home.jsx"))
const Movies = lazy(() => import("./pages/Movies.jsx"))
const Tvseries = lazy(() => import("./pages/Tvseries.jsx"))
const Bookmarked = lazy(() => import("./pages/Bookmarked.jsx"))

import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="tvseries" element={<Tvseries />} />
					<Route path="bookmarked" element={<Bookmarked />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default App
