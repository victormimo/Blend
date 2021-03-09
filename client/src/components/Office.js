import { Component } from "react";
import { Spacer, Flex, Button, Box } from "@chakra-ui/react";
import { Table } from "./Table";
import { Chair } from "./Chair";

export class Office extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seatSelected: false,
    };

    this.handleSelectSeat = this.handleSelectSeat.bind(this);
  }

  handleSelectSeat() {
    this.setState({ seatSelected: true });
  }

  createChairs(number, orientation) {
    const chairArr = [];
    for (let i = 0; i < number; i++) {
      chairArr.push(Chair({ orientation }));
    }
    return chairArr;
  }

  render() {
    const { returnToLobby, room, identity } = this.props;
    console.log("room obj", room);
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
              {this.createChairs(3, "down")}
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
        <Button onClick={returnToLobby}>Lobby</Button>
      </Box>
    );
  }
}
