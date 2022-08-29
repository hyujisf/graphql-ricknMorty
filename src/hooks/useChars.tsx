import { useQuery, gql } from "@apollo/client"

const GET_CHAR = gql`
	query {
		characters {
			results {
				id
				name
				image
				gender
			}
		}
	}
`

export default () => {
	const { loading, error, data } = useQuery(GET_CHAR)

	return {
		error,
		data,
		loading,
	}
}
