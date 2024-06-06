import { Box, Container, Flex, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </HStack>
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          display={{ base: "flex", md: "none" }}
          variant="outline"
          colorScheme="whiteAlpha"
        />
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;