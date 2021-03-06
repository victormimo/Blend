import { Flex, Image } from "@chakra-ui/react";
import { Chair } from "./Chair";

export const SecondWorkspace = () => {
  return (
    <Flex
      direction="row"
      w="40%"
      h="60vh"
      align="center"
      justify="space-evenly"
    >
      <Flex
        direction="column"
        w="100%"
        h="60vh"
        align="center"
        justify="space-evenly"
      >
        <Chair orientation="left" />
        <Chair orientation="left" />
        <Chair orientation="left" />
        <Chair orientation="left" />
      </Flex>
      <Flex
        direction="column"
        w="100%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Image src="Table-90.png" alt="table" />
      </Flex>
      <Flex
        direction="column"
        w="100%"
        h="60vh"
        align="center"
        justify="space-evenly"
      >
        <Chair orientation="right" />
        <Chair orientation="right" />
        <Chair orientation="right" />
        <Chair orientation="right" />
      </Flex>
    </Flex>
  );
};
