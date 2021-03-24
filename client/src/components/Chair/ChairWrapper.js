import LeftChair from "./LeftChair";
import DownChair from "./DownChair";
import UpChair from "./UpChair";
import RightChair from "./RightChair";

const Chair = ({ handleSelectedSeat, id, orientation }) => {
  const handleSelectedChair = () => {
    console.log(`chair ID selected ${id}`);
    handleSelectedSeat(id);
  };
  switch (orientation) {
    case "right":
      return <RightChair handleSelectedChair={handleSelectedChair} />;
    case "left":
      return <LeftChair handleSelectedChair={handleSelectedChair} />;
    case "up":
      return <UpChair handleSelectedChair={handleSelectedChair} />;
    case "down":
      return <DownChair handleSelectedChair={handleSelectedChair} />;
    default:
      return <div>no chair</div>;
  }
};

export default Chair;
