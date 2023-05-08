import Image from "next/image";
import Link from "next/link";

export default function Informacion({ titulo, portada, tipo, pelicula }) {
  return (
    <>
      <Link href={`/${tipo}/${pelicula}`}>
        <Image
          className="rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${portada}`}
          alt={titulo}
          width={200}
          height={200}
          style={{ objectFit: "cover", width: "30rem", height: "25rem" }}
        />
        <h2 className="text-white text-xl font-bold">{titulo}</h2>
      </Link>
    </>
  );
}
