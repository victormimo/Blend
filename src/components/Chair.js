import { Box, Flex } from "@chakra-ui/react";

export const Chair = () => {
  return (
    <Flex direction="column" align="center">
      <Box bg="gray.300" w="50px" h="10px" rounded="lg" />
      <Box bg="gray.400" w="5px" h="3px" />
      <Box bg="gray.700" w="50px" h="40px" rounded="lg" />
    </Flex>
  );
};
