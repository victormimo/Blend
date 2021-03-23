import { useState, useEffect } from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { Workspace } from "./Workspace";
import chairsData from "../data/chairs";
import { StreamButtons, streamButtonNames } from "./StreamButtons";

const Office = ({ room, returnToLobby, identity }) => {
  const [selectedSeatId, handleSelectedSeatId] = useState(null);
  const [videoMuted, handleVideoMuted] = useState(true);
  // const [audioMuted, handleAudioMuted] = useState(true);
  const [remoteParticipants, handleRemoteParticipants] = useState(
    room.participants.values()
  );

  useEffect(() => {
    // add event listeners for future remote participants coming or going
    room.on("participantConnected", (participant) =>
      addParticipant(participant)
    );
    room.on("participantDisconnected", (participant) =>
      removeParticipant(participant)
    );

    window.addEventListener("beforeunload", leaveRoom);

    return () => {
      console.log("got here on unmount");
      leaveRoom();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addParticipant = (participant) => {
    console.log(`${participant.identity} has joined the room.`);
    handleRemoteParticipants([...remoteParticipants, participant]);
  };

  const removeParticipant = (participant) => {
    console.log(`${participant.identity} has left the room`);

    // convert this
    // this.setState({
    //   remoteParticipants: this.state.remoteParticipants.filter(
    //     (p) => p.identity !== participant.identity
    //   ),
    // });
  };

  const handleSelectedSeat = (id) => {
    console.log("chair selected!", id);
    handleSelectedSeatId(id);
  };

  const handleSeatReset = () => {
    console.log("chair resetted!");
    handleSelectedSeatId(null);
  };

  const toggleVideoMute = () => {
    handleVideoMuted(!videoMuted);
  };

  const leaveRoom = () => {
    room.disconnect();
    returnToLobby();
  };

  console.log("room obj", room);
  console.log("local participant", room.localParticipant);
  console.log("remote participants", remoteParticipants);

  const localParticipantExistingPubs = Array.from(
    room.localParticipant.tracks.values()
  );

  // // track takes the track from the publication, publication is the higher step
  const localParticipantTracks = localParticipantExistingPubs.map(
    (pub) => pub.track
  );

  if (videoMuted) {
    room.localParticipant.videoTracks.forEach((pub) => {
      pub.track.disable();
    });
  } else if (!videoMuted) {
    room.localParticipant.videoTracks.forEach((pub) => {
      pub.track.enable();
    });
  }

  return (
    <Box>
      <Flex
        bg="gray.100"
        direction="row"
        w="100%"
        h="75vh"
        align="center"
        justify="center"
      >
        {console.log("chairs data", chairsData.firstWorkspace.firstSet)}
        <Workspace
          firstSet={chairsData.firstWorkspace.firstSet}
          secondSet={chairsData.firstWorkspace.secondSet}
          workspaceDirection="column"
          chairsDirection="row"
          tableSrc="Table.png"
          selectedSeatId={selectedSeatId}
          localParticipantTracks={localParticipantTracks}
          identity={identity}
          handleSeatReset={handleSeatReset}
          handleSelectedSeat={handleSelectedSeat}
          videoMuted={videoMuted}
        />
        <Workspace
          firstSet={chairsData.secondWorkspace.firstSet}
          secondSet={chairsData.secondWorkspace.secondSet}
          workspaceDirection="row"
          chairsDirection="column"
          tableSrc="Table-90.png"
          selectedSeatId={selectedSeatId}
          localParticipantTracks={localParticipantTracks}
          identity={identity}
          handleSeatReset={handleSeatReset}
          handleSelectedSeat={handleSelectedSeat}
          videoMuted={videoMuted}
        />
      </Flex>
      <Flex
        //bg="blue.400"
        direction="row"
        align="center"
        justify="space-evenly"
      >
        <StreamButtons
          toggleVideoMute={toggleVideoMute}
          streamButtons={streamButtonNames}
        />

        <Button onClick={returnToLobby}>Lobby</Button>
      </Flex>
    </Box>
  );
};

export default Office;
