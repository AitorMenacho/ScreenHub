import Image from "next/image";
import Link from "next/link";

export default function Listado({ movies, titulo, tipo }) {
  return (
    <div className="bg-stone-800 p-5 mt-5 rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-10">{titulo}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-items-center">
        {movies &&
          movies.slice(0, 12).map((movie) => (
            <Link href={`/${tipo}/${movie.id}`} key={movie.id}>
              <div className="relative">
                <p
                  className="absolute text-white font-bold text-xl bg-stone-950 rounded-full p-2 w-12 h-12 flex items-center justify-center"
                  style={{
                    color:
                      movie.vote_average < 5
                        ? "red"
                        : movie.vote_average < 7
                        ? "orange"
                        : "green",
                    top: "-10px",
                    left: "-10px",
                  }}
                >
                  {(Math.round(movie.vote_average * 10) / 10).toFixed(1)}
                </p>
                <Image
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={250}
                  className="bg-stone-700 rounded-xl shadow-md"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
