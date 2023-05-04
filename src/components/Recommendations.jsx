import { useState } from "react";
import { Tarjeta } from "./resultados/Tarjeta";
import { Puntuacion } from "./Puntuacion";

export default function Recommendations({ recomendation, tipo }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">
        Si te ha gustado, también te gustarán
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recomendation &&
          recomendation.slice(0, 10).map((recommendation) => (
            <div className="relative" key={recomendation.id}>
              <Puntuacion puntuacion={recommendation.vote_average} />
              <Tarjeta
                key={recommendation.id}
                id={recommendation.id}
                tipo={tipo}
                nombre={recommendation.title || recommendation.name}
                imagen={recommendation.poster_path}
                loading={loading}
                setLoading={setLoading}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
