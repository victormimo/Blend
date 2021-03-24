import { Flex } from "@chakra-ui/react";

const ParticipantInitialBubble = ({ handleSeatReset, identity }) => {
  return (
    <Flex
      h={20}
      w={20}
      border="1px"
      bg="purple.500"
      borderColor="gray.900"
      rounded={100}
      justify="center"
      align="center"
      onClick={handleSeatReset}
    >
      {identity.charAt(0).toUpperCase()}
    </Flex>
  );
};

export default ParticipantInitialBubble;
