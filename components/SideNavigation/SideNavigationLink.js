import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFlagCheckered,
  faPersonCircleQuestion,
  faDownload,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  faFlagCheckered,
  faPersonCircleQuestion,
  faHammer,
  faDownload,
  faCode,
];

const SideNavigationLink = ({ link, active, index }) => {
  return (
    <li
      className={
        active ? "side-navigation-link active" : "side-navigation-link"
      }
    >
      <a href="#" className="side-navigation-anchor">
        <FontAwesomeIcon icon={icons[index]} />
        <span>{link}</span>
      </a>
    </li>
  );
};

export default SideNavigationLink;
