import { SpaceCard } from "./components/SpaceCard";
import { Chair } from "./components/Chair";
import { Grid, Box, Flex, Spacer } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex
      bg="gray.100"
      direction="row"
      w="100%"
      h="75vh"
      align="center"
      justify="center"
    >
      <Spacer />
      <Flex
        bg="gray.200"
        direction="row"
        w="40%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Chair />
        <Chair />
        <Chair />
      </Flex>
      <Spacer />
      <Flex
        bg="blue.100"
        direction="column"
        w="40%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Chair />
        <Chair />
        <Chair />
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default App;
