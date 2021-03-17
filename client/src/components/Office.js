import { Component } from "react";
import { Flex, Button, Box, Image } from "@chakra-ui/react";
import { Workspace } from "./Workspace";
import chairsData from '../data/chairs'
import { StreamButtons } from "./StreamButtons";

const streamButtons = ["camera-icon.png", "mic-icon.png", "share-screen-icon.png"];

export class Office extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSeatId: null,
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
    this.setState({ selectedSeatId: id });
  }

  handleSeatReset() {
    console.log("seat resetted");
    this.setState({ selectedSeatId: null });
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
    console.log('selected id', this.state.selectedSeatId)

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
          <Workspace
            firstSet={chairsData.firstWorkspace.firstSet}
            secondSet={chairsData.firstWorkspace.secondSet}
            workspaceDirection='column'
            chairsDirection='row'
            tableSrc="Table.png"
            selectedSeatId={this.state.selectedSeatId}
            localParticipantTracks={localParticipantTracks}
            identity={this.props.identity}
            handleSeatReset={this.handleSeatReset}
            handleSelectedSeat={this.handleSelectedSeat}
            videoMuted={this.state.videoMuted}
          />
          <Workspace
            firstSet={chairsData.secondWorkspace.firstSet}
            secondSet={chairsData.secondWorkspace.secondSet}
            workspaceDirection='row'
            chairsDirection='column'
            tableSrc="Table-90.png"
            selectedSeatId={this.state.selectedSeatId}
            localParticipantTracks={localParticipantTracks}
            identity={this.props.identity}
            handleSeatReset={this.handleSeatReset}
            handleSelectedSeat={this.handleSelectedSeat}
            videoMuted={this.state.videoMuted}
          />
          {/* Stream Buttons */}
        </Flex>
        <Flex
          //bg="blue.400"
          direction="row"
          align="center"
          justify="space-evenly"
        >
          <StreamButtons toggleVideoMute={this.toggleVideoMute} streamButtons={streamButtons} />

          <Button onClick={this.props.returnToLobby}>Lobby</Button>
        </Flex>
      </Box>
    );
  }
}
