import { Flex, Image } from "@chakra-ui/react";

export const Table = ({ direction, imgSrc }) => {
  return (
    <Flex
      direction={direction}
      w="100%"
      h="50vh"
      align="center"
      justify="space-evenly"
    >
      <Image src={imgSrc} alt="table" />
    </Flex>
  );
};
