import Image from "next/image";
import logo from "../../assets/images/nextjs.png";

const Logo = () => {
  return (
    <div id="logo">
      <Image
        src={logo}
        alt="Next technical documentation"
        layout="responsive"
        width={70}
        height={70}
      />

      <span>Technical Documentation</span>
    </div>
  );
};

export default Logo;
