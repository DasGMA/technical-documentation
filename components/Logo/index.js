import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/nextjs.png";

const Logo = () => {
  return (
    <Link id="logo" href="/">
      <Image
        src={logo}
        alt="Next technical documentation"
        layout="responsive"
        width={70}
        height={70}
      />

      <span>Technical Documentation</span>
    </Link>
  );
};

export default Logo;
