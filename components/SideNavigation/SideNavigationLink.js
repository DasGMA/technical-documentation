import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFlagCheckered,
  faPersonCircleQuestion,
  faDownload,
  faHammer,
  faStar,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const icons = [
  faFlagCheckered,
  faStar,
  faPersonCircleQuestion,
  faHammer,
  faDownload,
  faCode,
  faCircleInfo,
];

const SideNavigationLink = ({ link, index, className = "nav-link" }) => {
  const regexLink = link.replace(/ /g, "_");

  return (
    <li>
      <a href={`#${regexLink}`} className={className}>
        <FontAwesomeIcon icon={icons[index]} />
        <span>{link}</span>
      </a>
    </li>
  );
};

export default SideNavigationLink;
