import LeftChair from "./LeftChair";
import DownChair from "./DownChair";
import UpChair from "./UpChair";
import RightChair from "./RightChair";

const Chair = ({ handleSelectedSeat, id, orientation }) => {
  const handleSelectedChair = () => {
    console.log(`chair ID selected ${id}`);
    handleSelectedSeat(id);
  };

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
