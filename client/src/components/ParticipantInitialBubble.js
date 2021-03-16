import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";

export class ParticipantInitialBubble extends Component {

  render() {
    return (
      <Flex
        h={20}
        w={20}
        border="1px"
        bg="purple.500"
        borderColor="gray.900"
        rounded={100}
        justify="center"
        align="center"
        onClick={this.props.handleSeatReset}
      >
        {this.props.identity.charAt(0)}
      </Flex>
    );
  }
}
