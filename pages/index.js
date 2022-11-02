import Image from "next/image";
import nextjs from "../assets/images/nextjs-gray.webp";

export default function Home() {
  return (
    <div>
      <figure>
        <Image src={nextjs} alt="Nextjs" layout="fill" className="image" />
      </figure>
    </div>
  );
}
