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
