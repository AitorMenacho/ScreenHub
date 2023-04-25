import { useRouter } from "next/router";
import Pelicula from "../api/Pelicula";
import Image from "next/image";
import { useState } from "react";
const Peliculas = () => {
  const router = useRouter();
  const { id } = router.query;

  const { movie, actors } = Pelicula(id);
  const [showAllActors, setShowAllActors] = useState(false);

  const handleShowAllActors = () => {
    setShowAllActors(true);
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          height: "50vh",
        }}
      ></div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Actores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {actors.slice(0, 10).map((actor) => (
            <div key={actor.id} className="flex flex-col items-center">
              <Image
                className="rounded-full w-24 h-24 object-cover"
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={100}
                height={100}
              />
              <p className="text-center font-semibold">{actor.name}</p>
              <p className="text-center text-sm">{actor.character}</p>
            </div>
          ))}
        </div>
        {!showAllActors && (
          <button
            className="block mx-auto mt-5 px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-400"
            onClick={handleShowAllActors}
          >
            Ver todos
          </button>
        )}
      </div>
    </>
  );
};

export default Peliculas;
