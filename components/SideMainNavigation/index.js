import { useRouter } from "next/router";
import { pages } from "../MainNavigation";
import MainNavigationLink from "../MainNavigation/MainNavigationLink";

const SideMainNavigation = ({
  sideMainVisible = false,
  resetVisible = () => {},
}) => {
  const history = useRouter();

  const className = !sideMainVisible
    ? "outer-container"
    : "outer-container visible";

  const renderLinks = pages.map((page) => (
    <MainNavigationLink
      key={page}
      page={page}
      active={
        history.pathname.includes(page.toLocaleLowerCase()) ||
        (history.pathname === "/" && page === "Home")
      }
      onClick={resetVisible}
    />
  ));

  return (
    <div className={className} onClick={resetVisible}>
      <aside id="side-main-navigation">
        <ul>{renderLinks}</ul>
      </aside>
    </div>
  );
};

export default SideMainNavigation;
