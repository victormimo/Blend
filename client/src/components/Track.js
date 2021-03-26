import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Track = ({ track }) => {
  const ref = React.createRef();

  useEffect(() => {
    if (track !== null) {
      const child = track.attach();
      ref.current.classList.add(track.kind);
      ref.current.appendChild(child);
    }
  }, [ref, track]);

  return (
    <Box>
      <Box ref={ref} />
    </Box>
  );
};

export default Track;
