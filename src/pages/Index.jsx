import { Box, Container, Flex, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} />
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <IconButton aria-label="About" icon={<FaInfoCircle />} />
          <IconButton aria-label="Contact" icon={<FaPhone />} />
        </HStack>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with a navigation bar.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;