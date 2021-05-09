import {Heading, Flex,  Button, Link, useColorMode, useColorModeValue} from "@chakra-ui/react"
import theme from "../themeconfig"


const IndexPage = () => {
	
	const { toggleColorMode } = useColorMode()
	const background = useColorModeValue("gray.100", "grat.700")

	return (
	<>
	<Flex justifyContent="flex-end" alignItems="flex-end" width="200vh" background={background} p={25}>
	<Button alignSelf="flex-start" colorScheme="teal" justifySelf="flex-start" mr={10} onClick={toggleColorMode}>
	Change Theme
	</Button>
	<Link href="/signup">
	<Button mr={6} color="red.300">
	Sign Up
	</Button>
	</Link>
	<Link href="/login">
	<Button colorScheme="cyan" textDecoration="none">
	Log In
	</Button>
	</Link>
	</Flex>
	<Flex height="50vh" justifyContent="center" alignItems="center" background={theme}>
		<Heading >
			Z :- The Social Platform that doesn't and won't suck
		</Heading>
	</Flex>
	</>
	)
}

export default IndexPage
