import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-stone-950">
      <hr className="my-8" style={{ borderColor: "#FFD700" }} />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <Image src={logo} alt="logo-ct" width={100} height={100} />
        <ul
          className="flex flex-wrap items-center gap-y-2 gap-x-8"
          style={{ color: "#FFD700" }}
        >
          <li>
            <Link
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              TMDB
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8" style={{ borderColor: "#FFD700" }} />
      <p className="text-center font-normal" style={{ color: "#FFD700" }}>
        Con ❤️ por Aitor Menacho Vega
      </p>
    </footer>
  );
}
