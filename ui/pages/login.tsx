import { Flex, Heading, Input,  FormLabel, FormControl, Button, useColorModeValue } from "@chakra-ui/react";
import {useState, ChangeEvent} from "react";


interface State {
	username: string;
	password: string;
}

const LoginPage: React.FC<State> = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const formBackground = useColorModeValue("gray.100", "gray.700")

return (
<>
<Flex height="75vh" alignItems="center" justifyContent="center">
	<Flex direction="column"  p={12} rounded={6} background={formBackground}>
		<Heading mb={5}>
			Log In 
		</Heading>
		<FormControl id="username">
			<FormLabel mb={3}>Username </FormLabel>
			<Input type="text" mb={3} size="lg" value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setUsername(e.target.value)
			}}/>
			<FormLabel>Password</FormLabel>
			<Input type="password" size="lg" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setPassword(e.target.value)
			}} />
			<Button variant="outline" mt={6} colorScheme="twitter" onClick={(e: ChangeEvent<HTMLButtonElement>) =>{
				e.preventDefault();
				console.log(username, password)
			}}>Log In</Button>
		</FormControl>
	</Flex>
</Flex>
</>
)
}
export default LoginPage
