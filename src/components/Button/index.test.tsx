import React from "react"
import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"

import Button from "./index"
describe("Render Button component", () => {
	it("the title is visible", () => {
		const { container } = render(<Button isDisabled></Button>)
		expect(container.querySelector("span.disabled")).toBeInTheDocument()
	})

	it("Checking is Loading/Spinner render?", () => {
		const { container, getByText } = render(<Button isLoading></Button>)

		expect(getByText(/loading/i)).toBeInTheDocument()
		expect(container.querySelector("span")).toBeInTheDocument()
	})

	// it("checking is <a> tag render?", () => {
	// 	const { container } = render(<Button type='link' isExternal></Button>)
	// 	expect(container.querySelector("a")).toBeInTheDocument()
	// })

	// it("checking is <Link> tag render?", () => {
	// 	const { container } = render(
	// 		<Router>
	// 			<Button href='' type='link'></Button>
	// 		</Router>
	// 	)
	// 	expect(container.querySelector("a")).toBeInTheDocument()
	// })
})
