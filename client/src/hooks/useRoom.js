import React, { useEffect } from "react";

const addParticipant = (
  participant,
  handleRemoteParticipants,
  remoteParticipants
) => {
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
const leaveRoom = (room, returnToLobby) => {
  room.disconnect();
  returnToLobby();
};

const useRoom = (
  room,
  returnToLobby,
  handleRemoteParticipants,
  remoteParticipants,
  videoMuted
) => {
  useEffect(() => {
    room.on("participantConnected", (participant) =>
      addParticipant(participant, handleRemoteParticipants, remoteParticipants)
    );
    room.on("participantDisconnected", (participant) =>
      removeParticipant(participant)
    );

    window.addEventListener("beforeunload", leaveRoom);

    return () => {
      leaveRoom(room, returnToLobby);
    };
  }, []);
};

export default useRoom;
