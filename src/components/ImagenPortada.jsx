import Image from "next/image";

export function ImagenPortada({ poster, titulo }) {
  return (
    <>
      <Image
        className="rounded-t-lg"
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={titulo}
        width={300}
        height={450}
        quality={50}
        style={{ objectFit: "cover" }}
      />
    </>
  );
}
