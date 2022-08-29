import apolloClient from "@api/apolloClient"
import { ApolloProvider } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
)
