import { Flex, Box } from "@chakra-ui/react";

const DownChair = ({ handleSelectedChair }) => {
  return (
    <Flex direction="column" align="center" onClick={handleSelectedChair}>
      <Box bg="gray.300" w="50px" h="10px" rounded="lg" />
      <Box bg="gray.400" w="5px" h="3px" />
      <Box bg="gray.700" w="50px" h="40px" rounded="lg" />
    </Flex>
  );
};

export default DownChair;
