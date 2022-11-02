import Image from "next/image";
import Link from "next/link";
import nextjs from "../assets/images/nextjs-gray.webp";

export default function Home() {
  return (
    <div className="homepage">
      <figure>
        <Image src={nextjs} alt="Nextjs" layout="fill" className="image" />
      </figure>
      <h1>Hello!</h1>
      <p>
        This little project is my attempt to build a responsive technical
        documentation website using <code>Next.js</code>, <code>CSS</code>,{" "}
        <code>FontAwesome</code>.
      </p>
      <p>
        It is deployed on <code>HEROKU</code>.
      </p>
      <p>
        You can see code respository on{" "}
        <Link
          href="https://github.com/DasGMA/technical-documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  );
}
