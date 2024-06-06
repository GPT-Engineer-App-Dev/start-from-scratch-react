import { Box, Container, Flex, Text, VStack, Link, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Box>
          <Link href="/" p={2}>
            <IconButton aria-label="Home" icon={<FaHome />} colorScheme="whiteAlpha" />
          </Link>
          <Link href="/about" p={2}>
            <IconButton aria-label="About" icon={<FaInfoCircle />} colorScheme="whiteAlpha" />
          </Link>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is your starting point. Use the navigation bar to explore.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;