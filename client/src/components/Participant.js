import { Component } from "react";
import { Box } from "@chakra-ui/react";
import { Track } from "./Tracks";

// ignored as we are not yet introducing remote participants

export class Participant extends Component {
  constructor(props) {
    super(props);

    const existingPublications = Array.from(
      this.props.participant.tracks.values()
    );
    const existingTracks = existingPublications.map(
      (publication) => publication.track
    );
    const nonNullTracks = existingTracks.filter((track) => track !== null);

    this.state = {
      tracks: nonNullTracks,
    };
  }

  componentDidMount() {
    if (!this.props.localParticipant) {
      // subscribing new participant to others when they do in fact come in
      this.props.participant.on("trackSubscribed", (track) =>
        this.addTrack(track)
      );
    }
  }

  addTrack(track) {
    this.setState({
      tracks: [...this.state.tracks, track],
    });
  }

  render() {
    return (
      <Box className="participant" id={this.props.participant.identity}>
        <Box className="identity">{this.props.participant.identity}</Box>
        {this.state.tracks.map((track) => (
          <Track key={track} filter={this.state.filter} track={track} />
        ))}
      </Box>
    );
  }
}
