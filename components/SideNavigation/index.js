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
        <header>
          <h3>Navigation</h3>
        </header>
        <ul>{renderLinks}</ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
