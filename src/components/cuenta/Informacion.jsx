import Image from "next/image";

export default function Informacion({ titulo, pelicula }) {

  console.log(pelicula.results)

  return (
    <>
      {/* <Image
        className="rounded-xl"
        src={`https://image.tmdb.org/t/p/w500${
          pelicula[pelicula.length]?.poster_path
        }`}
        alt={titulo}
        width={200}
        height={200}
        style={{ objectFit: "cover", width: "30rem", height: "25rem" }}
      /> */}
    </>
  );
}
