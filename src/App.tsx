import React, { Suspense, lazy, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Style
import "@assets/scss/style.scss"

// Pages
// import Layout from "./layouts/Default"
import Spiner from "@comp/Spiner"
const Layout = React.lazy(() => import("@layouts/Default"))
const Home = React.lazy(() => import("@pages/Home"))
const Detail = React.lazy(() => import("@pages/Detail"))

function App() {
	const [count, setCount] = useState(0)

	return (
		<Suspense fallback={<Spiner />}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/:id' element={<Detail />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
