import Link from "next/link";
import Container from "../../layout-components/Container";

const pages = ["Home", "Documentation", "Examples"];

const MainNavigation = () => {
  const renderLinks = pages.map((page) => (
    <li key={page}>
      <Link href={page === "Home" ? "/" : page}>{page}</Link>
    </li>
  ));
  return (
    <nav id="main-navigation" aria-label="Main navigation">
      <span>LOGO</span>
      <ul>{renderLinks}</ul>
    </nav>
  );
};

export default MainNavigation;
