import useChar from "@hooks/useChar"
import { useParams } from "react-router-dom"
// import "./index.scss"
import "./index.scss"

export default () => {
	const { id } = useParams()
	const { data, loading, error } = useChar(id)
	console.log({ error, loading, data })

	if (error) return <span>Something went wrong</span>
	if (loading) return <span>Fetching</span>

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-lg-4'>
					<div className='card-img card-shadow overflow-hidden mb-3'>
						<img className='card-img__full' src={data.character.image} alt='' />
					</div>
					<div className='card card-shadow bg-base-100'>
						<h1 className='font-weight-bolder'>{data.character.name}</h1>
					</div>
					<div className='card card-shadow bg-base-100 my-3'>
						<p className='mt-2'>
							<small className='d-block font-weight-bolder'>Status</small>
							<span>{data.character.status}</span>
						</p>
						<p className='mt-2'>
							<small className='d-block font-weight-bolder'>Gender</small>
							<span>{data.character.gender}</span>
						</p>
						<p className='mt-2'>
							<small className='d-block font-weight-bolder'>Location</small>
							<span>{data.character.location.name}</span>
						</p>
						<p className='mt-2'>
							<small className='d-block font-weight-bolder'>Dimension</small>
							<span>{data.character.location.dimension}</span>
						</p>
					</div>
				</div>
				<div className='col-lg-8'>
					<div className='card card-shadow bg-base-100'>
						<div className='card-episode__grid'>
							<h4 className='font-weight-bolder'>Is on Episodes :</h4>
							{data.character.episode.map((episode: any, i: any) => (
								<div
									className='card bg-base-200 card-episode__item h-100'
									key={i}
								>
									<b className='d-block'>{episode.name}</b>
									<span className='card-episode__tag mt-1 rounded-pill text-xs'>
										{episode.episode}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
