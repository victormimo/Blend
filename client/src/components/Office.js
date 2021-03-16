import React, { Component } from "react";
import { Spacer, Flex, Button, Box, Image } from "@chakra-ui/react";
import { Table } from "./Table";
import { Chair } from "./Chair";
import { ParticipantInitialBubble } from "./ParticipantInitialBubble";
import { Track } from "./Track";

const streamButtons = ["video-icon.png", "audio-icon.png", "share-screen.png"];

export class Office extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seatSelected: false,
      videoMuted: true,
      audioMuted: true,
      remoteParticipants: Array.from(this.props.room.participants.values()),
    };

    this.leaveRoom = this.leaveRoom.bind(this);
    this.handleSelectSeat = this.handleSelectSeat.bind(this);
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

  handleSelectSeat() {
    this.setState({
      seatSelected: !this.state.seatSelected,
    });
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

  createChairs(number, orientation, handleSelectSeat) {
    const chairArr = [];
    for (let i = 0; i < number; i++) {
      chairArr.push(Chair({ orientation, handleSelectSeat }));
    }
    return chairArr;
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

    // track takes the track from the publication, publication is the higher step
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

    // chair with all functionality
    let hookedChair = [];
    if (!this.state.videoMuted && this.state.seatSelected) {
      hookedChair = localParticipantTracks.map((track) => (
        <Track key={track} track={track} />
      ));
    } else if (this.state.seatSelected) {
      hookedChair[0] = (
        <ParticipantInitialBubble
          identity={this.props.identity}
          handleSelectedSeat={this.handleSelectSeat}
        />
      );
    } else {
      hookedChair[0] = (
        <Chair orientation="down" handleSelectedSeat={this.handleSelectSeat} />
      );
    }

    return (
      <Box>
        <Flex
          bg="gray.100"
          direction="row"
          w="100%"
          h="100vh"
          align="center"
          justify="center"
        >
          <Spacer />
          <Flex
            direction="column"
            w="40%"
            h="50vh"
            align="center"
            justify="space-evenly"
          >
            <Flex
              direction="row"
              w="100%"
              h="50vh"
              align="center"
              justify="space-evenly"
            >
              {/* {this.createChairs(3, "down", this.handleSelectSeat)} */}
              {hookedChair.map((el) => (
                <div>{el}</div>
              ))}

              {/* for curiosity lets test its disabled
              {localParticipantTracks.map((track) => (
                <Track key={track} track={track} />
              ))} */}

              {/* 
              {this.state.seatSelected ? (
                <ParticipantInitialBubble
                  identity={this.props.identity}
                  handleSelectedSeat={this.handleSelectSeat}
                />
              ) : (
                <Chair
                  orientation="down"
                  handleSelectedSeat={this.handleSelectSeat}
                />
              )} */}

              {/* {Array(3)
                .fill(1)
                .map((n, i) => (
                  <Chair
                    orientation="down"
                    handleSelectedSeat={this.handleSelectSeat}
                  />
                ))} */}
            </Flex>
            <Table direction="row" imgSrc="Table.png" />
            <Flex
              direction="row"
              w="100%"
              h="50vh"
              align="center"
              justify="space-evenly"
            >
              {this.createChairs(3, "up")}
            </Flex>
          </Flex>
          <Spacer />

          <Flex
            direction="row"
            w="40%"
            h="60vh"
            align="center"
            justify="space-evenly"
          >
            <Flex
              direction="column"
              w="100%"
              h="60vh"
              align="center"
              justify="space-evenly"
            >
              {this.createChairs(4, "left")}
            </Flex>
            <Table direction="column" imgSrc="Table-90.png" />
            <Flex
              direction="column"
              w="100%"
              h="60vh"
              align="center"
              justify="space-evenly"
            >
              {this.createChairs(4, "right")}
            </Flex>
          </Flex>
          <Spacer />
        </Flex>
        {/* Stream Buttons */}
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
      </Box>
    );
  }
}
