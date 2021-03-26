import { useState } from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
import Office from "./components/Office";
import { connect } from "twilio-video";
import "firebase/functions";
import { getRoomToken } from "./services";
// Initialize Cloud Functions through Firebase

const App = () => {
  const [identity, handleIdentity] = useState("");
  const [room, handleRoom] = useState(null);
  const roomName = "cool-room";
  const disabled = identity === "" ? true : false;

  const handleReturnToLobby = () => {
    handleRoom(null);
  };

  const handleUpdateIdentity = ({ target }) => {
    handleIdentity(target.value);
  };

  const handleJoinRoom = async () => {
    const { tokenString } = await getRoomToken({
      identity,
      roomName,
    });

    const room = await connect(tokenString, {
      name: roomName,
      audio: true,
      video: true,
    });

    console.log("room", room);

    handleRoom(room);
  };

  return (
    <Box>
      {room === null ? (
        <Flex
          height="100vh"
          bg="purple.100"
          direction="column"
          align="center"
          justify="space-evenly"
        >
          <Flex direction="column" align="center">
            <Input
              w={500}
              h={100}
              bg="white"
              placeholder="Whatsya name?"
              //value={this.state.identity} <- why need??
              onChange={handleUpdateIdentity}
            />
            <Button disabled={disabled} onClick={handleJoinRoom}>
              Join Room
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Office
          room={room}
          returnToLobby={handleReturnToLobby}
          identity={identity}
        />
      )}
    </Box>
  );
};

export default App;
