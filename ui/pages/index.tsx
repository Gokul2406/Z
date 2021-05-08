import {Heading, Flex, UnorderedList, ListItem, Button, Link} from "@chakra-ui/react"
import theme from "../themeconfig"

const IndexPage = () => {
	return (
	<>
	<Flex justifyContent="flex-end" alignItems="flex-end" width="200vh" p={25}>
	<Link href="/signup">
	<Button mr={6} color="red.300">
	Sign Up
	</Button>
	</Link>
	<Link href="/login" color="teal.50">
	<Button colorScheme="teal" textDecoration="none">
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
