import { Container, Text, VStack, Heading, Box, Button, Flex, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">Welcome to CodeMaster</Heading>
        <Text fontSize="lg">Your ultimate platform to learn coding online.</Text>
        <Flex justifyContent="center" wrap="wrap" spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2}>
            <FaCode size="3em" />
            <Heading fontSize="xl" mt={4}>Learn to Code</Heading>
            <Text mt={4}>Interactive coding lessons and challenges.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2}>
            <FaLaptopCode size="3em" />
            <Heading fontSize="xl" mt={4}>Practice Projects</Heading>
            <Text mt={4}>Build real-world projects to solidify your skills.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2}>
            <FaChalkboardTeacher size="3em" />
            <Heading fontSize="xl" mt={4}>Expert Mentors</Heading>
            <Text mt={4}>Get guidance from industry experts.</Text>
          </Box>
        </Flex>
        <Button colorScheme="teal" size="lg" mt={8}>Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;