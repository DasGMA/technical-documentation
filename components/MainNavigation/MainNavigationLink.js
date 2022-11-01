import Link from "next/link";

const MainNavigationLink = ({ active, page }) => {
  return (
    <li className={active ? "active" : ""}>
      <Link href={page === "Home" ? "/" : page.toLocaleLowerCase()}>
        {page}
      </Link>
    </li>
  );
};

export default MainNavigationLink;
