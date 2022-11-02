import Link from "next/link";
import { memo } from "react";

const MainNavigationLink = ({ active, page, onClick = () => {} }) => {
  return (
    <li className={active ? "active" : ""} onClick={onClick}>
      <Link href={page === "Home" ? "/" : page.toLocaleLowerCase()}>
        {page}
      </Link>
    </li>
  );
};

export default memo(MainNavigationLink);
