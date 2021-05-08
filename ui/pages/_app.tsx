import {ChakraProvider} from "@chakra-ui/react"
import theme from "../themeconfig"

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider >
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
