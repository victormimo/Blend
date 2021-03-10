import { Component } from "react";
import { Spacer, Flex, Box, Input, Button } from "@chakra-ui/react";
import { Office } from "./components/Office";
import { connect } from "twilio-video";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identity: "",
      room: null,
    };

    this.handleReturnToLobby = this.handleReturnToLobby.bind(this);
    this.handleUpdateIdentity = this.handleUpdateIdentity.bind(this);
    this.handleJoinRoom = this.handleJoinRoom.bind(this);
  }

  handleReturnToLobby() {
    this.setState({ room: null });
  }

  handleUpdateIdentity({ target }) {
    this.setState({ identity: target.value });
  }

  async handleJoinRoom() {
    // const response = await fetch(
    //   `http://localhost:8081/token?identity=${this.state.identity}`
    // );
    // // res is a readableStream -> use json() to convert
    // const responseData = await response.json();
    // const { tokenString } = responseData;

    const room = "sample";
    // const room = await connect(
    //   tokenString,
    //   {
    //     name: "cool-room",
    //     audio: true,
    //     video: true,
    //   }
    // );

    this.setState({ room: room });
  }

  render() {
    const disabled = this.state.identity === "" ? true : false;

    return (
      <Box>
        {this.state.room === null ? (
          <Box>
            <Input
              w={500}
              h={100}
              placeholder="Whatsya name?"
              //value={this.state.identity} <- why need??
              onChange={this.handleUpdateIdentity}
            />
            <Spacer />
            <Button disabled={disabled} onClick={this.handleJoinRoom}>
              Join Room
            </Button>
          </Box>
        ) : (
          <div>
            <Office
              room={this.state.room}
              returnToLobby={this.handleReturnToLobby}
              identity={this.state.identity}
            />
          </div>
        )}
      </Box>
    );
  }
}

export default App;
