import { links } from "../SideNavigation";
import SideNavigationLink from "../SideNavigation/SideNavigationLink";

const SubNavigation = () => {
  const renderLinks = links.map((link, i) => (
    <SideNavigationLink key={link} link={link} index={i} />
  ));

  return (
    <aside id="sub-navigation">
      <nav>
        <ul>{renderLinks}</ul>
      </nav>
    </aside>
  );
};

export default SubNavigation;
