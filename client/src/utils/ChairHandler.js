import Track from "../components/Track";
import Chair from "../components/Chair/ChairWrapper";
import ParticipantInitialBubble from "../components/ParticipantInitialBubble";

const ChairHandler = ({
  selectedSeatId,
  chairId,
  videoMuted,
  handleSeatReset,
  localParticipantTracks,
  handleSelectedSeat,
  orientation,
  identity,
}) => {
  return selectedSeatId === chairId ? (
    videoMuted ? (
      <ParticipantInitialBubble
        identity={identity}
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
      id={chairId}
    />
  );
};

export default ChairHandler;
