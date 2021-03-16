import { Track } from "../components/Track";
import { Chair } from "../components/Chair";
import { ParticipantInitialBubble } from "../components/ParticipantInitialBubble";

const ChairHandler = ({
  selectedSeatId,
  chairId,
  isVideoMuted,
  handleSeatReset,
  localParticipantTracks,
  handleSelectedSeat,
  orientation,
  identity,
}) => {
  return selectedSeatId === chairId ? (
    isVideoMuted ? (
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
