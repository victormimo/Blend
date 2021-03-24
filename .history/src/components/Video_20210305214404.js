import { useEffect, useState } from "react";

export default function useDominantSpeaker(room) {
  const [dominantSpeaker, setDominantSpeaker] = useState(room.dominantSpeaker);

  useEffect(() => {
    room.on("dominantSpeakerChanged", setDominantSpeaker);
    return () => {
      room.off("dominantSpeakerChanged", setDominantSpeaker);
    };
  }, [room]);

  return dominantSpeaker;
}
