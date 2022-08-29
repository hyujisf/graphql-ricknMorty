import { ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	credentials: "include",
	uri: "https://rickandmortyapi.com/graphql",
})

export default apolloClient
