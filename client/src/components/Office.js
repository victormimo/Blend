import React, { Component } from "react";
import { Spacer, Flex, Button, Box, Image } from "@chakra-ui/react";
import { Table } from "./Table";
import { Chair } from "./Chair";
import { ParticipantInitialBubble } from "./ParticipantInitialBubble";
import { Track } from "./Track";
import { ChairHandler } from "../utils/ChairHandler";
import { FirstWorkspace } from "./FirstWorkspace";
import { SecondWorkspace } from "./SecondWorkspace";

//const streamButtons = ["video-icon.png", "audio-icon.png", "share-screen.png"];
const streamButtons = ["video", "audio", "share"];

export class Office extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chairs: {
        firstWorkspace: {
          firstSet: {
            chair1: {
              id: "0down",
              orientation: "down",
            },
            chair2: {
              id: "1down",
              orientation: "down",
            },
            chair3: {
              id: "2down",
              orientation: "down",
            },
          },
          secondSet: {
            chair4: {
              id: "0up",
              orientation: "up",
            },
            chair5: {
              id: "1up",
              orientation: "up",
            },
            chair6: {
              id: "2up",
              orientation: "up",
            },
          },
        },
        secondWorkspace: {
          firstSet: {
            chair7: {
              id: "0left",
              orientation: "left",
            },
            chair8: {
              id: "1left",
              orientation: "left",
            },
            chair9: {
              id: "2left",
              orientation: "left",
            },
            chair10: {
              id: "3left",
              orientation: "left",
            },
          },
          secondSet: {
            chair11: {
              id: "0right",
              orientation: "right",
            },
            chair12: {
              id: "1right",
              orientation: "right",
            },
            chair13: {
              id: "2right",
              orientation: "right",
            },
            chair14: {
              id: "3right",
              orientation: "right",
            },
          },
        },
      },
      seatSelectedId: null,
      videoMuted: true,
      audioMuted: true,
      remoteParticipants: Array.from(this.props.room.participants.values()),
    };

    this.handleSeatReset = this.handleSeatReset.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.handleSelectedSeat = this.handleSelectedSeat.bind(this);
    this.toggleVideoMute = this.toggleVideoMute.bind(this);
  }

  componentDidMount() {
    // Add event listeners for future remote participants coming or going
    this.props.room.on("participantConnected", (participant) =>
      this.addParticipant(participant)
    );
    this.props.room.on("participantDisconnected", (participant) =>
      this.removeParticipant(participant)
    );

    // is below needed if we have componentWillUnmount?
    window.addEventListener("beforeunload", this.leaveRoom);
  }

  componentWillUnmount() {
    this.leaveRoom();
  }

  handleSelectedSeat(id) {
    console.log("chair selected!", id);
    this.setState({ seatSelectedId: id });
  }

  handleSeatReset() {
    console.log("seat resetted");
    this.setState({ seatSelectedId: null });
  }

  toggleVideoMute() {
    this.setState({
      videoMuted: !this.state.videoMuted,
    });
  }

  addParticipant(participant) {
    console.log(`${participant.identity} has joined the room.`);

    this.setState({
      remoteParticipants: [...this.state.remoteParticipants, participant],
    });
  }

  removeParticipant(participant) {
    console.log(`${participant.identity} has left the room`);

    this.setState({
      remoteParticipants: this.state.remoteParticipants.filter(
        (p) => p.identity !== participant.identity
      ),
    });
  }

  leaveRoom() {
    this.props.room.disconnect();
    this.props.returnToLobby();
  }

  render() {
    console.log("room obj", this.props.room);
    console.log("local participant", this.props.room.localParticipant);
    console.log(
      "audio track",
      Array.from(this.props.room.localParticipant.audioTracks)
    );

    const localParticipantExistingPubs = Array.from(
      this.props.room.localParticipant.tracks.values()
    );

    // // track takes the track from the publication, publication is the higher step
    const localParticipantTracks = localParticipantExistingPubs.map(
      (pub) => pub.track
    );

    if (this.state.videoMuted) {
      this.props.room.localParticipant.videoTracks.forEach((pub) => {
        pub.track.disable();
      });
    } else if (!this.state.videoMuted) {
      this.props.room.localParticipant.videoTracks.forEach((pub) => {
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
          <FirstWorkspace
            firstSet={this.state.chairs.firstWorkspace.firstSet}
            secondSet={this.state.chairs.firstWorkspace.secondSet}
            seatSelectedId={this.state.seatSelectedId}
            localParticipantTracks={localParticipantTracks}
            identity={this.props.identity}
            handleSeatReset={this.handleSeatReset}
            handleSelectSeat={this.handleSelectedSeat}
          />
          <Spacer />
          <SecondWorkspace
            firstSet={this.state.chairs.secondWorkspace.firstSet}
            secondSet={this.state.chairs.secondWorkspace.secondSet}
            seatSelectedId={this.state.seatSelectedId}
            localParticipantTracks={localParticipantTracks}
            identity={this.props.identity}
            handleSeatReset={this.handleSeatReset}
            handleSelectSeat={this.handleSelectedSeat}
          />
          {/* Stream Buttons */}
        </Flex>
        <Flex
          bg="blue.400"
          direction="row"
          align="center"
          justify="space-evenly"
        >
          {streamButtons.map((name) => (
            <Flex
              h={20}
              w={20}
              border="1px"
              borderColor="gray.900"
              rounded={100}
              justify="center"
              align="center"
              onClick={this.toggleVideoMute}
            >
              {name}
              {/* <Image h={7} w={7} src={name} alt={name} /> */}
            </Flex>
          ))}

          <Button onClick={this.props.returnToLobby}>Lobby</Button>
        </Flex>
      </Box>
    );
  }
}
