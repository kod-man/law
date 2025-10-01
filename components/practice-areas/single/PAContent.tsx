import CriminalLawNote from "../list/CriminalLawNote";
import PressLawNote from "../list/PressLawNote";

interface IPAConcent {
  id: number;
}

const PAContent = ({ id }: IPAConcent) => {
  if (id === 1) {
    return <CriminalLawNote />;
  }
  if (id === 2) {
    return <PressLawNote />;
  }
};

export default PAContent;
