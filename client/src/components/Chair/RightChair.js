import { Flex, Box } from "@chakra-ui/react";

const RightChair = ({ handleSelectedChair }) => {
  return (
    <Flex direction="row" align="center" onClick={handleSelectedChair}>
      <Box bg="gray.700" w="40px" h="50px" rounded="lg" />
      <Box bg="gray.400" w="3px" h="5px" />
      <Box bg="gray.300" w="10px" h="50px" rounded="lg" />
    </Flex>
  );
};

export default RightChair;
