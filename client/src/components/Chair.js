import { Box, Flex } from "@chakra-ui/react";
import { Component } from 'react'

export class Chair extends Component{
  constructor(props){
    super(props)

    this.handleSelectedChair = this.handleSelectedChair.bind(this)
  }

  handleSelectedChair(){
    console.log(` id ${this.props.id} `)
    this.props.handleSelectedSeat(this.props.id)
  }

  render(){
    const { orientation} = this.props

      if (orientation === "right") {
        return (
          <Flex direction="row" align="center" onClick={this.handleSelectedChair}>
            <Box bg="gray.700" w="40px" h="50px" rounded="lg" />
            <Box bg="gray.400" w="3px" h="5px" />
            <Box bg="gray.300" w="10px" h="50px" rounded="lg" />
          </Flex>
        );
      } else if (orientation === "left") {
        return (
          <Flex direction="row" align="center" onClick={this.handleSelectedChair}>
            <Box bg="gray.300" w="10px" h="50px" rounded="lg" />
            <Box bg="gray.400" w="3px" h="5px" />
            <Box bg="gray.700" w="40px" h="50px" rounded="lg" />
          </Flex>
        );
      } else if (orientation === "up") {
        return (
          <Flex direction="column" align="center" onClick={this.handleSelectedChair}>
            <Box bg="gray.700" w="50px" h="40px" rounded="lg" />
            <Box bg="gray.400" w="5px" h="3px" />
            <Box bg="gray.300" w="50px" h="10px" rounded="lg" />
          </Flex>
        );
      } else if (orientation === "down") {
        return (
          <Flex direction="column" align="center" onClick={this.handleSelectedChair}>
            <Box bg="gray.300" w="50px" h="10px" rounded="lg" />
            <Box bg="gray.400" w="5px" h="3px" />
            <Box bg="gray.700" w="50px" h="40px" rounded="lg" />
          </Flex>
        );
      } else {
        return <div>no chair</div>;
      }
    
  }
}

