import Image from "next/image";
import Link from "next/link";

export default function ListadoPeliculas({
  movies,
  titulo,
  verTodasPeliculasVistas,
  tipo,
}) {
  return (
    <>
      <h2 className="text-xl font-bold mb-3">{titulo}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies &&
          movies.slice(0, 10).map((pelis) => (
            <Link
              key={pelis.id}
              href={`/${tipo}/${pelis.id}`}
              as={`/${tipo}/${pelis.id}`}
            >
              <div className="flex flex-col items-center">
                <Image
                  className="w-50 h-50 object-cover rounded-xl"
                  src={`https://image.tmdb.org/t/p/original${pelis.poster_path}`}
                  alt={pelis.title}
                  width={200}
                  height={200}
                  quality={50}
                />
              </div>
            </Link>
          ))}
      </div>
      <button
        className="block mx-auto mt-5 px-4 py-2 text-stone-950 bg-yellow-500 rounded hover:bg-yellow-400"
        onClick={verTodasPeliculasVistas}
      >
        ver todas
      </button>
    </>
  );
}
