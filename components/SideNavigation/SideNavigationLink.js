import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFlagCheckered,
  faPersonCircleQuestion,
  faDownload,
  faHammer,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const icons = [
  faFlagCheckered,
  faStar,
  faPersonCircleQuestion,
  faHammer,
  faDownload,
  faCode,
];

const SideNavigationLink = ({ link, index }) => {
  const regexLink = link.replace(/ /g, "_");

  return (
    <li>
      <Link href={`#${regexLink}`}>
        <FontAwesomeIcon icon={icons[index]} />
        <span>{link}</span>
      </Link>
    </li>
  );
};

export default SideNavigationLink;
