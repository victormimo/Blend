import ChairHandler from "./ChairHandler";
import { Flex } from "@chakra-ui/react";

const WorkspaceHandler = ({
  chairs,
  selectedSeatId,
  handleSeatReset,
  localParticipantTracks,
  handleSelectedSeat,
  identity,
  videoMuted
}) => {
  return (
    <>
      {Object.keys(chairs).map((chair) => (
        <ChairHandler
          key={chairs[chair].id}
          selectedSeatId={selectedSeatId}
          chairId={chairs[chair].id}
          orientation={chairs[chair].orientation}
          videoMuted={videoMuted} // this should be muted by default?
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
