import { Chair } from "./Chair";
import { Flex, Image } from "@chakra-ui/react";

export const FirstWorkspace = () => {
  return (
    <Flex
      direction="column"
      w="40%"
      h="50vh"
      align="center"
      justify="space-evenly"
    >
      <Flex
        direction="row"
        w="100%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Chair orientation="down" />
        <Chair orientation="down" />
        <Chair orientation="down" />
      </Flex>
      <Flex
        direction="row"
        w="100%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Image src="Table.png" alt="table" />
      </Flex>
      <Flex
        direction="row"
        w="100%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Chair orientation="up" />
        <Chair orientation="up" />
        <Chair orientation="up" />
      </Flex>
    </Flex>
  );
};
