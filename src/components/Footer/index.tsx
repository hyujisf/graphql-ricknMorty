import { Button } from "@components/Button"
import "./index.scss"
export default () => {
	return (
		<footer className='container'>
			<div className='footer rounded-top bg-base-100 font-weight-bolder py-3 px-5'>
				<Button
					className='nav-link '
					type='link'
					isExternal
					href='https://github.com/hyujisf'
				>
					Github - Hyujisf <small>(Rick and Morty - Graphql Project)</small>
				</Button>
			</div>
		</footer>
	)
}
