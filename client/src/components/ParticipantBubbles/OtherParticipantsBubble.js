import { Flex } from "@chakra-ui/react";

const OtherParticipantsBubble = ({ identity }) => {
  return (
    <Flex
      h={20}
      w={20}
      border="1px"
      bg="blue.500"
      borderColor="gray.900"
      rounded={100}
      justify="center"
      align="center"
    >
      {identity.charAt(0).toUpperCase()}
    </Flex>
  );
};

export default OtherParticipantsBubble;
