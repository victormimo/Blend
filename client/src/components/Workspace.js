import { Flex } from "@chakra-ui/react";
import WorkspaceHandler from "../utils/WorkspaceHandler";
import { Table } from "./Table";

export const Workspace = ({
  firstSet,
  secondSet,
  workspaceDirection,
  chairsDirection,
  tableSrc,
  selectedSeatId,
  localParticipantTracks,
  identity,
  handleSeatReset,
  handleSelectedSeat,
  videoMuted
}) => {
  return (
      <Flex
        // bg="gray.400"
        direction={workspaceDirection}
        w="100%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Flex
          //bg="yellow.400"
          direction={chairsDirection}
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
            videoMuted={videoMuted}
          />
        </Flex>
        <Table 
          imgSrc={tableSrc} 
        />
        <Flex
          //bg="yellow.400"
          direction={chairsDirection}
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
            videoMuted={videoMuted}
          />
        </Flex>
      </Flex>
  );
};
