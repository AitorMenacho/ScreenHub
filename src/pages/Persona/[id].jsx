import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Persona from "../api/Persona";

const Peliculas = () => {
  const router = useRouter();
  const { id } = router.query;

  const { persona, peliculas, series, populares } = Persona(id);

  if (!persona || !peliculas || !series) return null;

  const fotoPeli =
    peliculas.cast && peliculas.cast.length > 0
      ? Math.floor(Math.random() * (peliculas.cast.length + 1))
      : 0;

  const verTodas = () => {
    console.log("hola");
  };

  return (
    <>
      {peliculas.cast && peliculas.cast.length > 0 && (
        <div
          className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${peliculas.cast[fotoPeli]?.backdrop_path}')`,
            height: "70vh",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container columns-2 z-10">
            <div className="col-span-2">
              <Image
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${persona.profile_path}`}
                alt={persona.name}
                width={300}
                height={450}
              />
            </div>
            <div className="col-span-1">
              <h1 className="text-3xl font-bold text-white">{persona.name}</h1>
              <p className="text-white">{persona.biography}</p>
              <p className="text-white my-1">
                <span className="font-bold">Fecha de nacimiento:</span>{" "}
                {persona.birthday}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Películas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {peliculas.cast &&
            peliculas.cast.slice(0, 10).map((pelis) => (
              <Link
                key={pelis.id}
                href="/Peliculas/[id]"
                as={`/Peliculas/${pelis.id}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="w-50 h-50 object-cover"
                    src={`https://image.tmdb.org/t/p/original${pelis.poster_path}`}
                    alt={pelis.title}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-semibold">{pelis.title}</p>
                </div>
              </Link>
            ))}
        </div>
        <button
          className="block mx-auto mt-5 px-4 py-2 text-stone-950 bg-yellow-500 rounded hover:bg-yellow-400"
          onClick={verTodas}
        >
          Ver todas
        </button>
      </div>

      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Series</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {series.cast &&
            series.cast.slice(0, 10).map((series) => (
              <Link
                key={series.id}
                href="/Series/[id]"
                as={`/Series/${series.id}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="w-50 h-50 object-cover"
                    src={`https://image.tmdb.org/t/p/original${series.poster_path}`}
                    alt={series.name}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-semibold">{series.name}</p>
                </div>
              </Link>
            ))}
        </div>
        <button
          className="block mx-auto mt-5 px-4 py-2 text-stone-950 bg-yellow-500 rounded hover:bg-yellow-400"
          onClick={verTodas}
        >
          Ver todas
        </button>
      </div>
    </>
  );
};

export default Peliculas;
