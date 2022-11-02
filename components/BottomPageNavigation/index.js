import { links } from "../SideNavigation";
import SideNavigationLink from "../SideNavigation/SideNavigationLink";

const BottomNavigation = () => {
  const renderLinks = links.map((link, i) => (
    <SideNavigationLink key={link} link={link} index={i} />
  ));

  return (
    <aside id="bottom-navigation">
      <nav>
        <ul>{renderLinks}</ul>
      </nav>
    </aside>
  );
};

export default BottomNavigation;
