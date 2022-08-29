import { Button } from "@components/Button"
import useCurrentTheme from "@hooks/useCurrentTheme"
import { Link } from "react-router-dom"
import "./index.scss"

export default () => {
	const isDarkTheme = useCurrentTheme()
	return (
		<header className='container'>
			<div className='navbar rounded-bottom bg-base-100 pt-4 pb-3'>
				<Button
					className='btn btn-primary btn-sm rounded-pill nav-link py-1 px-4 font-weight-bolder'
					isPrimary
					type='link'
					href='/'
				>
					Home
				</Button>
				<div className=''>
					<small className='mr-2'>Current System Theme: </small>
					<span className='bg-base-200 rounded-pill font-weight-bolder py-1 px-3'>
						{isDarkTheme ? "dark" : "light"}
					</span>
				</div>
			</div>
		</header>
	)
}
