import CriminalLawNote from "../list/CriminalLawNote";
import PressLawNote from "../list/PressLawNote";
import RealEstateLawNote from "../list/RealEstateLawNote";

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
  if (id === 3) {
    return <RealEstateLawNote />;
  }
};

export default PAContent;
