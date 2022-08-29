import React, { ReactNode } from "react"
import Header from "@comp/Header"
import Footer from "@comp/Footer"
// import React, { ReactNode } from "react";

interface Props {
	children?: ReactNode
}
export default ({ children }: Props) => {
	return (
		<div className='app'>
			<Header />
			<div className='container min-h-screen py-4'>{children}</div>
			<Footer />
		</div>
	)
}
