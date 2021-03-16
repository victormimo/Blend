import { Flex, Spacer, Box } from "@chakra-ui/react";
import WorkspaceHandler from "../utils/WorkspaceHandler";
import { Table } from "./Table";

// first workspace
export const FirstWorkspace = ({
  firstSet,
  secondSet,
  selectedSeatId,
  localParticipantTracks,
  identity,
  handleSeatReset,
  handleSelectedSeat,
}) => {
  return (
    <Box>
      <Flex
        bg="gray.400"
        direction="column"
        w="100%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Flex
          bg="yellow.400"
          direction="row"
          w="100%"
          h="60vh"
          align="center"
          justify="space-evenly"
        >
          <WorkspaceHandler
            chairs={firstSet}
            selectedSeatId={selectedSeatId}
            handleSeatReset={handleSeatReset}
            localParticipantTracks={localParticipantTracks}
            handleSelectedSeat={handleSelectedSeat}
            identity={identity}
          />
        </Flex>
        <Table direction="row" imgSrc="Table.png" />
        <Flex
          bg="yellow.400"
          direction="row"
          w="100%"
          h="60vh"
          align="center"
          justify="space-evenly"
        >
          <WorkspaceHandler
            chairs={secondSet}
            selectedSeatId={selectedSeatId}
            handleSeatReset={handleSeatReset}
            localParticipantTracks={localParticipantTracks}
            handleSelectedSeat={handleSelectedSeat}
            identity={identity}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
