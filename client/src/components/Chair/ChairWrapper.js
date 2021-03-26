import LeftChair from "./LeftChair";
import DownChair from "./DownChair";
import UpChair from "./UpChair";
import RightChair from "./RightChair";

const Chair = ({ handleSelectedSeat, id, path, orientation }) => {
  const handleSelectedChair = () => handleSelectedSeat(id, path);

  if (orientation === "right") {
    return <RightChair handleSelectedChair={handleSelectedChair} />;
  } else if (orientation === "left") {
    return <LeftChair handleSelectedChair={handleSelectedChair} />;
  } else if (orientation === "up") {
    return <UpChair handleSelectedChair={handleSelectedChair} />;
  } else if (orientation === "down") {
    return <DownChair handleSelectedChair={handleSelectedChair} />;
  } else {
    return <div>no chair</div>;
  }
};

export default Chair;
