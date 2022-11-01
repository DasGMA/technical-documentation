import SideNavigationLink from "./SideNavigationLink";

const links = [
  "Introduction",
  "Pros & Cons",
  "Required Skills",
  "Instalation",
  "Usage",
];

const SideNavigation = () => {
  const renderLinks = links.map((link, i) => (
    <SideNavigationLink key={link} link={link} index={i} />
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
