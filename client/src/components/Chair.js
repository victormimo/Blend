import { Box, Flex } from "@chakra-ui/react";

export const Chair = ({ orientation }) => {
  if (orientation === "right") {
    return (
      <Flex direction="row" align="center">
        <Box bg="#444343" w="50px" h="50px" rounded="15px" />
        <Box bg="gray.400" w="3px" h="5px" />
        <Box bg="#A8A6A6" w="8px" h="50px" rounded="lg" />
      </Flex>
    );
  } else if (orientation === "left") {
    return (
      <Flex direction="row" align="center">
        <Box bg="#A8A6A6" w="8px" h="50px" rounded="lg" />
        <Box bg="gray.400" w="3px" h="5px" />
        <Box bg="#444343" w="50px" h="50px" rounded="15px" />
      </Flex>
    );
  } else if (orientation === "up") {
    return (
      <Flex direction="column" align="center">
        <Box bg="#444343" w="50px" h="50px" rounded="15px" />
        <Box bg="gray.400" w="5px" h="3px" />
        <Box bg="#A8A6A6" w="50px" h="8px" rounded="lg" />
      </Flex>
    );
  } else if (orientation === "down") {
    return (
      <Flex direction="column" align="center">
        <Box bg="#A8A6A6" w="50px" h="8px" rounded="lg" />
        <Box bg="gray.400" w="5px" h="3px" />
        <Box bg="#444343" w="50px" h="50px" rounded="15px" />
      </Flex>
    );
  } else {
    return <div>no chair</div>;
  }
};
