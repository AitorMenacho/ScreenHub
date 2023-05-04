import { useState } from "react";
import { Tarjeta } from "./resultados/Tarjeta";
import { Puntuacion } from "./Puntuacion";

export default function Listado({ movies, titulo, tipo }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-stone-800 p-5 mt-5 rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-10">{titulo}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-items-center">
        {movies &&
          movies.slice(0, 12).map((movie) => (
            <div className="relative" key={movie.id}>
              <Puntuacion puntuacion={movie.vote_average} />
              <Tarjeta
                id={movie.id}
                tipo={tipo}
                nombre={movie.title || movie.name}
                imagen={movie.poster_path}
                loading={loading}
                setLoading={setLoading}
                valoracion={movie.vote_average}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
