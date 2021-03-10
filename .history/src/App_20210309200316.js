import { Spacer, Flex } from "@chakra-ui/react";
import { FirstWorkspace } from "./components/FirstWorkspace";
import { SecondWorkspace } from "./components/SecondWorkspace";

const App = () => {
  return (
    <Flex
      bg="gray.100"
      direction="row"
      w="100%"
      h="100vh"
      align="center"
      justify="center"
    >
      <Spacer />
      <FirstWorkspace />
      <Spacer />
      <SecondWorkspace />
      <Spacer />
    </Flex>
  );
};

export default App;
