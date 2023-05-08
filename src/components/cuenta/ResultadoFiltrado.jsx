import Image from "next/image";
import Link from "next/link";

export default function ResultadoFiltrado({ peliculas, series }) {
  const tipo = peliculas && peliculas.length > 0 ? "Peliculas" : "Series";

  const resultados = peliculas && peliculas.length > 0 ? peliculas : series;

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {resultados &&
          resultados.map((resultado) => (
            <div key={resultado.id} className="m-4">
              <Link href={`/${tipo}/${resultado.id}`}>
                <Image
                  className="rounded-xl"
                  src={`https://image.tmdb.org/t/p/w500${resultado.poster_path}`}
                  alt={resultado.title || resultado.name}
                  width={200}
                  height={300}
                  quality={50}
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
