import { Flex } from "@chakra-ui/react";
import { Chair } from "./Chair";
import { Table } from "./Table";

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
      <Table direction="column" imgSrc="Table-90.png" />
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
