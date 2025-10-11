import ConsumerLawNote from "../list/ConsumerLawNote";
import ContractsLawNote from "../list/ContractsLawNote";
import CriminalLawNote from "../list/CriminalLawNote";
import EnforcementAndBankruptcyLawNote from "../list/EnforcementAndBankruptcyLawNote";
import FamilyLawNote from "../list/FamilyLawNote";
import InheritanceLawNote from "../list/InheritanceLawNote";
import IntellectualPropertyLawNote from "../list/IntellectualPropertyLawNote";
import LaborLawNote from "../list/LaborLawNote";
import PressLawNote from "../list/PressLawNote";
import RealEstateLawNote from "../list/RealEstateLawNote";
import SocialMediaLawNote from "../list/SocialMediaLawNote";
import TrafficAndInsuranceLawNote from "../list/TrafficAndInsuranceLawNote";

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
  if (id === 4) {
    return <SocialMediaLawNote />;
  }
  if (id === 5) {
    return <TrafficAndInsuranceLawNote />;
  }
  if (id === 6) {
    return <ContractsLawNote />;
  }
  if (id === 7) {
    return <ConsumerLawNote />;
  }
  if (id === 8) {
    return <EnforcementAndBankruptcyLawNote />;
  }
  if (id === 9) {
    return <IntellectualPropertyLawNote />;
  }
  if (id === 10) {
    return <LaborLawNote />;
  }
  if (id === 11) {
    return <FamilyLawNote />;
  }
  if (id === 12) {
    return <InheritanceLawNote />;
  }
};

export default PAContent;
