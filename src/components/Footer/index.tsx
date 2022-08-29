import { Button } from "@components/Button"
import "./index.scss"
export default () => {
	const btnProps = {
		className: "nav-link ",
		type: "link",
		isExternal: true,
		href: "https://github.com/hyujisf",
	}
	return (
		<footer className='container'>
			<div className='footer rounded-top bg-base-100 font-weight-bolder py-3 px-5'>
				<Button {...btnProps}>
					Github - Hyujisf <small>(Rick and Morty - Graphql Project)</small>
				</Button>
			</div>
		</footer>
	)
}
