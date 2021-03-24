import { Flex, Image } from "@chakra-ui/react";

const Table = ({ imgSrc }) => {
  return (
    <Flex w="100%" h="50vh" align="center" justify="space-evenly">
      <Image src={imgSrc} alt="table" />
    </Flex>
  );
};

export default Table;
