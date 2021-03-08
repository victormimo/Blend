import { Chair } from "./Chair";
import { Flex } from "@chakra-ui/react";
import { Table } from "./Table";

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
      <Table direction="row" imgSrc="Table.png" />
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
