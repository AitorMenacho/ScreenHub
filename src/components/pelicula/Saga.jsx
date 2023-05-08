import Image from "next/image";
import Link from "next/link";
import { Puntuacion } from "../Puntuacion";
import { Tarjeta } from "../resultados/Tarjeta";
import { useState } from "react";

export default function Saga({ saga }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">{saga.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {saga &&
          saga.parts &&
          saga.parts.map((saga) => (
            <div className="relative" key={saga.id}>
              <Link href={`/Peliculas/${saga.id}`}>
                <div className="flex flex-col items-center">
                  <Puntuacion puntuacion={saga.vote_average} />
                  <Tarjeta
                    id={saga.id}
                    tipo="Peliculas"
                    nombre={saga.title || saga.name}
                    imagen={saga.poster_path}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
