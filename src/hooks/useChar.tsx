import { useQuery, gql } from "@apollo/client"

const GET_CHAR = gql`
	query GetChar($id: ID!) {
		character(id: $id) {
			id
			name
			status
			gender
			image
			location {
				name
				dimension
			}

			episode {
				name
				episode
			}
		}
	}
`

export default (id: any) => {
	const { data, error, loading } = useQuery(GET_CHAR, {
		variables: {
			id,
		},
	})

	return {
		data,
		error,
		loading,
	}
}
