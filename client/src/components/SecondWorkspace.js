import { Flex, Spacer, Box } from "@chakra-ui/react";
import WorkspaceHandler from "../utils/WorkspaceHandler";
import { Table } from "./Table";

// first workspace
export const SecondWorkspace = ({
  firstSet,
  secondSet,
  selectedSeatId,
  localParticipantTracks,
  identity,
  handleSeatReset,
  handleSelectedSeat,
}) => {
  return (
    <Box>
      <Flex
        bg="gray.400"
        direction="row"
        w="100%"
        h="50vh"
        align="center"
        justify="space-evenly"
      >
        <Flex
          bg="yellow.400"
          direction="column"
          w="100%"
          h="60vh"
          align="center"
          justify="space-evenly"
        >
          <WorkspaceHandler
            chairs={firstSet}
            selectedSeatId={selectedSeatId}
            handleSeatReset={handleSeatReset}
            localParticipantTracks={localParticipantTracks}
            handleSelectedSeat={handleSelectedSeat}
            identity={identity}
          />
        </Flex>

        <Table direction="row" imgSrc="Table-90.png" />
        <Flex
          bg="yellow.400"
          direction="column"
          w="100%"
          h="60vh"
          align="center"
          justify="space-evenly"
        >
          <WorkspaceHandler
            chairs={secondSet}
            selectedSeatId={selectedSeatId}
            handleSeatReset={handleSeatReset}
            localParticipantTracks={localParticipantTracks}
            handleSelectedSeat={handleSelectedSeat}
            identity={identity}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

{
  /* <Flex
            bg="gray.400"
            direction="row"
            w="40%"
            h="60vh"
            align="center"
            justify="space-evenly"
          >
            <Flex
              bg="yellow.400"
              direction="column"
              w="100%"
              h="60vh"
              align="center"
              justify="space-evenly"
            >
              {this.state.seatSelectedId === this.state.chairs.chair7.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair7.id}
                  />
                ) : (
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair7.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair7.id}
                />
              )}

              {this.state.seatSelectedId === this.state.chairs.chair8.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair8.id}
                  />
                ) : (
                  // should this be a global stt
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair8.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair8.id}
                />
              )}

              {this.state.seatSelectedId === this.state.chairs.chair9.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair9.id}
                  />
                ) : (
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair9.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair9.id}
                />
              )}
              {this.state.seatSelectedId === this.state.chairs.chair10.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair10.id}
                  />
                ) : (
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair10.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair10.id}
                />
              )}
            </Flex>
            <Table direction="column" imgSrc="Table-90.png" />
            <Flex
              bg="yellow.400"
              direction="column"
              w="100%"
              h="60vh"
              align="center"
              justify="space-evenly"
            >
              {this.state.seatSelectedId === this.state.chairs.chair11.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair11.id}
                  />
                ) : (
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair11.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair11.id}
                />
              )}

              {this.state.seatSelectedId === this.state.chairs.chair12.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair12.id}
                  />
                ) : (
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair12.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair12.id}
                />
              )}

              {this.state.seatSelectedId === this.state.chairs.chair13.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair13.id}
                  />
                ) : (
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair13.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair13.id}
                />
              )}
              {this.state.seatSelectedId === this.state.chairs.chair14.id ? (
                this.state.videoMuted ? (
                  <ParticipantInitialBubble
                    identity={this.props.identity}
                    handleSeatReset={this.handleSeatReset}
                    id={this.state.chairs.chair14.id}
                  />
                ) : (
                  localParticipantTracks.map((track) => (
                    <Track key={track} track={track} />
                  ))
                )
              ) : (
                <Chair
                  orientation={this.state.chairs.chair14.orientation}
                  handleSelectedSeat={this.handleSelectSeat}
                  id={this.state.chairs.chair14.id}
                />
              )}
            </Flex>
          </Flex>
          <Spacer />
        </Flex> */
}
