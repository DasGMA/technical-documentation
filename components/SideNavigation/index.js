import SideNavigationLink from "./SideNavigationLink";

const links = new Array(8).fill("Link");

const SideNavigation = () => {
  const renderLinks = links.map((link) => (
    <SideNavigationLink key={(link += 1)} link={link} />
  ));
  return (
    <aside>
      <nav>
        <ul>{renderLinks}</ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
