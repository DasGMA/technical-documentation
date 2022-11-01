import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SideNavigationLink = ({ link, active }) => {
  return (
    <li
      className={
        active ? "side-navigation-link active" : "side-navigation-link"
      }
    >
      <a href="#" className="side-navigation-anchor">
        <FontAwesomeIcon icon={faCode} />
        <span>{link}</span>
      </a>
    </li>
  );
};

export default SideNavigationLink;
