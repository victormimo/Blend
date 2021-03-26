import { useState, useEffect } from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { Workspace } from "./Workspace";
import { StreamButtons, streamButtonNames } from "./StreamButtons";
import firebase from "firebase";
import { useList } from "react-firebase-hooks/database";
import useRoom from "../hooks/useRoom";
import { updateUserSeat } from "../services";
const OFFICE_ID = "aaeb4cf4-67gg-11eb-8dcd-0242ac130003";
const USER_ID = "123412";
const OFFICE_BASE_PATH = `offices/${OFFICE_ID}`;

const Office = ({ room, returnToLobby, identity }) => {
  const [selectedSeatId, handleSelectedSeatId] = useState(null);
  const [videoMuted, handleVideoMuted] = useState(true);
  const [remoteParticipants, handleRemoteParticipants] = useState(
    room.participants.values()
  );

  // this office ID will be fetched from the user object on signin
  const currentOfficeRef = firebase.database().ref(OFFICE_BASE_PATH);
  const [snapshot, loading, error] = useList(currentOfficeRef);

  const handleSelectedSeat = (id, path) => {
    console.log("chair selected!", id);
    console.log("path selected!", path);
    handleSelectedSeatId(id);
    updateUserSeat(path, USER_ID);
  };

  const handleSeatReset = (path) => {
    console.log("chair resetted!");
    console.log("path resetted!");
    handleSelectedSeatId(null);
    updateUserSeat(path, "");
  };

  const toggleVideoMute = () => {
    handleVideoMuted(!videoMuted);
  };

  const localParticipantExistingPubs = Array.from(
    room.localParticipant.tracks.values()
  );

  const localParticipantTracks = localParticipantExistingPubs.map(
    (pub) => pub.track
  );

  useRoom(
    room,
    returnToLobby,
    handleRemoteParticipants,
    remoteParticipants,
    videoMuted
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
        {loading ? (
          <div>loading</div>
        ) : error ? (
          console.log("error", error)(<div>error</div>)
        ) : (
          snapshot.map((v) => {
            const workspaces = v.val();

            return Object.keys(workspaces).map((workspaceKey) => {
              const workspaceData = workspaces[workspaceKey];
              const chairSets = workspaceData.chairSets;
              const firstSetKey = Object.keys(chairSets)[0];
              const firstSet = chairSets[Object.keys(chairSets)[0]];
              const secondSetKey = Object.keys(chairSets)[1];
              const secondSet = chairSets[Object.keys(chairSets)[1]];
              return (
                <Workspace
                  key={workspaceKey}
                  firstSet={firstSet}
                  firstSetKey={firstSetKey}
                  secondSet={secondSet}
                  secondSetKey={secondSetKey}
                  path={`${OFFICE_BASE_PATH}/workspaces/${workspaceKey}/chairSets`}
                  workspaceDirection={workspaceData.workspaceDirection}
                  chairsDirection={workspaceData.chairsDirection}
                  selectedSeatId={selectedSeatId}
                  localParticipantTracks={localParticipantTracks}
                  identity={identity}
                  handleSeatReset={handleSeatReset}
                  handleSelectedSeat={handleSelectedSeat}
                  videoMuted={videoMuted}
                />
              );
            });
          })
        )}
      </Flex>
      <Flex direction="row" align="center" justify="space-evenly">
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
