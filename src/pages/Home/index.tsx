import useChars from "@hooks/useChars"
import { Link } from "react-router-dom"
import "./index.scss"

export default () => {
	const { error, loading, data } = useChars()
	// console.log({ loading, error, data })
	if (loading) return <span>Loading...</span>
	if (error) return <span>Error :</span>

	return (
		<div className='row-card mx-3'>
			{data.characters.results.map((character: any) => (
				<Link to={`/${character.id}`} key={character.id}>
					<div className='card-img overflow-hidden card__scale cursor__select'>
						<img
							className='card-img__full'
							src={character.image}
							alt={character.name + " image"}
						/>
						<div className='card-body__gradient'>
							<b className='card-title__bottom'>{character.name}</b>
							{/* <p className="card-text"></p> */}
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}
