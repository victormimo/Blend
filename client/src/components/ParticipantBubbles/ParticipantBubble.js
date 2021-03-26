import { Flex } from "@chakra-ui/react";

const ParticipantBubble = ({ handleSeatReset, identity, path }) => {
  const handleResetting = () => handleSeatReset(path);
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
      onClick={handleResetting}
    >
      {identity.charAt(0).toUpperCase()}
    </Flex>
  );
};

export default ParticipantBubble;
