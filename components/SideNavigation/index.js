import SideNavigationLink from "./SideNavigationLink";

export const links = [
  "Introduction",
  "Features",
  "Pros & Cons",
  "Skills",
  "Setup",
  "Usage",
  "Resources",
];

const SideNavigation = () => {
  const renderLinks = links.map((link, i) => (
    <SideNavigationLink key={link} link={link} index={i} />
  ));

  return (
    <aside>
      <nav id="navbar">
        <header></header>
        <ul>{renderLinks}</ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
