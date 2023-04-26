import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Persona from "@/pages/api/Persona";

const Peliculas = () => {
  const router = useRouter();
  const { id } = router.query;

  const { persona, peliculas } = Persona(id);

  if (!persona || !peliculas) return null;

  const fotoPeli =
    peliculas.cast && peliculas.cast.length > 0
      ? Math.floor(Math.random() * (peliculas.cast.length + 1))
      : 0;

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
            peliculas.cast.map((pelis) => (
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
      </div>
    </>
  );
};

export default Peliculas;
