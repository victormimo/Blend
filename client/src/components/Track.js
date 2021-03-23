import { Box } from "@chakra-ui/react";
import React, { Component } from "react";

export class Track extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    if (this.props.track !== null) {
      const child = this.props.track.attach();
      this.ref.current.classList.add(this.props.track.kind);
      this.ref.current.appendChild(child);
    }
  }

  render() {
    return <Box ref={this.ref}></Box>;
  }
}
