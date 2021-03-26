import Track from "../components/Track";
import Chair from "../components/Chair/ChairWrapper";
import ParticipantInitialBubble from "../components/ParticipantInitialBubble";

const ChairHandler = ({
  selectedSeatId,
  chairId,
  path,
  videoMuted,
  handleSeatReset,
  localParticipantTracks,
  handleSelectedSeat,
  orientation,
  identity,
}) => {
  // handles the logic of the chairs
  // TODO: extend logic to render all chairs
  return selectedSeatId === chairId ? (
    videoMuted ? (
      <ParticipantInitialBubble
        identity={identity}
        path={`${path}/${chairId}`}
        handleSeatReset={handleSeatReset}
        id={chairId}
      />
    ) : (
      localParticipantTracks.map((track) => <Track key={track} track={track} />)
    )
  ) : (
    <Chair
      orientation={orientation}
      handleSelectedSeat={handleSelectedSeat}
      path={`${path}/${chairId}`}
      id={chairId}
    />
  );
};

export default ChairHandler;
