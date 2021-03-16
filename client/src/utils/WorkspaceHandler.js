import ChairHandler from "./ChairHandler";
import { Flex } from "@chakra-ui/react";

const WorkspaceHandler = ({
  chairs,
  selectedSeatId,
  handleSeatReset,
  localParticipantTracks,
  handleSelectedSeat,
  identity,
}) => {
  return (
    <>
      {Object.keys(chairs).map((chair) => (
        <ChairHandler
          selectedSeatId={selectedSeatId}
          chairId={chairs[chair].id}
          orientation={chairs[chair].orientation}
          isVideoMuted={true} // this should be muted by default?
          handleSeatReset={handleSeatReset}
          identity={identity}
          handleSelectedSeat={handleSelectedSeat}
          localParticipantTracks={localParticipantTracks}
        />
      ))}
    </>
  );
};

export default WorkspaceHandler;
