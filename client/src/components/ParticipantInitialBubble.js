import React, { Component } from "react";
import { Box } from "@chakra-ui/react";

export class ParticipantInitialBubble extends Component {
  render() {
    return (
      <Box
        h={20}
        w={20}
        border="1px"
        borderColor="gray.900"
        rounded={100}
        justify="center"
        align="center"
        onClick={this.props.handleSelectedSeat}
      >
        {this.props.identity.charAt(0)}
      </Box>
    );
  }
}
