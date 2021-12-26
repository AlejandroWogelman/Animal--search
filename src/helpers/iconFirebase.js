import { catIcon, dogIcon, otherIcon } from "../components/IconLocation";

const CAT = "CAT";
const DOG = "DOG";
const OTHER = "OTHER";

export const iconFirebase = (icon) => {
  switch (icon.toUpperCase()) {
    case CAT:
      return catIcon;
    case DOG:
      return dogIcon;
    case OTHER:
      return otherIcon;

    default:
      break;
  }
};
