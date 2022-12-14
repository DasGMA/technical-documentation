import { useRouter } from "next/router";
import Logo from "../Logo";
import MainNavigationLink from "./MainNavigationLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

export const pages = ["Home", "Documentation"];

const MainNavigation = ({ setSideVisible = () => {} }) => {
  const history = useRouter();

  const renderLinks = pages.map((page) => (
    <MainNavigationLink
      key={page}
      page={page}
      active={
        history.pathname.includes(page.toLocaleLowerCase()) ||
        (history.pathname === "/" && page === "Home")
      }
    />
  ));

  return (
    <div className="navigation-container">
      <nav id="main-navigation" aria-label="Main navigation">
        <Logo />
        <button id="burger-button" onClick={setSideVisible}>
          <FontAwesomeIcon icon={faBarsStaggered} color="#01B0D3" size="3x" />
        </button>
        <ul>{renderLinks}</ul>
      </nav>
    </div>
  );
};

export default memo(MainNavigation);
