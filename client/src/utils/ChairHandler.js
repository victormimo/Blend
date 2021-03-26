import Track from "../components/Track";
import Chair from "../components/Chair/ChairWrapper";
import ParticipantBubble from "../components/ParticipantBubbles/ParticipantBubble";
import OtherParticipantsBubble from "../components/ParticipantBubbles/OtherParticipantsBubble";

const USER_ID = "123412";

const ChairHandler = ({
  selectedSeatId,
  chairId,
  path,
  userId,
  videoMuted,
  handleSeatReset,
  localParticipantTracks,
  handleSelectedSeat,
  orientation,
  identity,
}) => {
  // handles the logic of the chairs
  // TODO: extend logic to render all chairs
  // QUESTION: should the local "selectedSeatId logic be removed in favour of db fetching only?

  if (selectedSeatId === chairId) {
    if (videoMuted) {
      return (
        <ParticipantBubble
          identity={identity}
          path={`${path}/${chairId}`}
          handleSeatReset={handleSeatReset}
          id={chairId}
        />
      );
    } else {
      return localParticipantTracks.map((track) => (
        <Track key={track} track={track} />
      ));
    }
  } else if (userId !== "" && userId !== USER_ID) {
    // this will be the other track, will need identity data for participant bubble
    const OTHER_PARTICIPANT_IDENTITY = "patrick";
    return (
      <OtherParticipantsBubble
        identity={OTHER_PARTICIPANT_IDENTITY}
        id={chairId}
      />
    );
  } else {
    return (
      <Chair
        orientation={orientation}
        handleSelectedSeat={handleSelectedSeat}
        path={`${path}/${chairId}`}
        id={chairId}
      />
    );
  }
};

export default ChairHandler;

/*
logic:
does it make sense to have the local state tell which seat is selected? then you have to worry about checking 

*/
