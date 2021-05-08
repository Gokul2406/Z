import { Flex, Text, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const IndexPage = () => {
const { toggleColorMode } = useColorMode();
const formBackground = useColorModeValue("gray.100", "gray.700")
return (
<>
<Flex height="20vh" alignItems="center" justifyContent="center">
	<Heading>
	Welcome Back To Z
	</Heading>
</Flex>
<Flex height="75vh" alignItems="center" justifyContent="center">
	<Flex direction="column" background={formBackground} p={12} rounded={6}>
		<Heading mb={5}>
			Log In 
		</Heading>
		<Text fontSize="2xl" mb={3} >Username</Text>	
		<Input placeholder="Username" variant="filled" mb={6} type="text"/>
		<Text mb={3} fontSize="2xl">Password</Text>
		<Input placeholder="Password" variant="filled" mb={3} type="password" />
		<Button colorScheme="teal" mb={6}>Log In </Button>
		<Button colorScheme="teal" onClick={toggleColorMode}>Toggle Colour Mode</Button>
	</Flex>
</Flex>
</>
)
}
export default IndexPage
