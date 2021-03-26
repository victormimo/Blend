import ChairHandler from "./ChairHandler";

const WorkspaceHandler = ({
  chairs,
  path,
  selectedSeatId,
  handleSeatReset,
  localParticipantTracks,
  handleSelectedSeat,
  identity,
  videoMuted,
}) => {
  // iterates through the set of chairs and creates component that deals with the logic
  return (
    <>
      {Object.keys(chairs).map((chair) => (
        <ChairHandler
          key={chairs[chair].id}
          path={path}
          userId={chairs[chair].userId}
          selectedSeatId={selectedSeatId}
          chairId={chairs[chair].id}
          orientation={chairs[chair].orientation}
          videoMuted={videoMuted}
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
