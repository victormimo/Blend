import { Box, Flex } from "@chakra-ui/react";

export const Chair = ({ orientation }) => {
  console.log(orientation);
  if (orientation === "right") {
    return (
      <Flex direction="row" align="center">
        <Box bg="gray.700" w="40px" h="50px" rounded="lg" />
        <Box bg="gray.400" w="3px" h="5px" />
        <Box bg="gray.300" w="10px" h="50px" rounded="lg" />
      </Flex>
    );
  } else if (orientation === "left") {
    return (
      <Flex direction="row" align="center">
        <Box bg="gray.300" w="10px" h="50px" rounded="lg" />
        <Box bg="gray.400" w="3px" h="5px" />
        <Box bg="gray.700" w="40px" h="50px" rounded="lg" />
      </Flex>
    );
  } else if (orientation === "up") {
    return (
      <Flex direction="column" align="center">
        <Box bg="gray.700" w="50px" h="40px" rounded="lg" />
        <Box bg="gray.400" w="5px" h="3px" />
        <Box bg="gray.300" w="50px" h="10px" rounded="lg" />
      </Flex>
    );
  } else if (orientation === "down") {
    return (
      <Flex direction="column" align="center">
        <Box bg="gray.300" w="50px" h="10px" rounded="lg" />
        <Box bg="gray.400" w="5px" h="3px" />
        <Box bg="gray.700" w="50px" h="40px" rounded="lg" />
      </Flex>
    );
  } else {
    return <div>no chair</div>;
  }
};
