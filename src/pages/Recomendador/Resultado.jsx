import { useRouter } from "next/router";
import FiltradoRecomendacion from "../api/FiltradoRecomendacion";
import { useState } from "react";
import PasaPagina from "@/components/PasaPagina";
import { Puntuacion } from "@/components/Puntuacion";
import { Tarjeta } from "@/components/resultados/Tarjeta";

export default function Resultado() {
  const router = useRouter();
  const { genero, plataforma, lanzamiento, valoracion, tipo } = router.query;

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const generosFormateados = Array.isArray(genero) ? genero.join("|") : genero;

  const valoracionNumerica =
    valoracion === "calidad" ? 7 : valoracion === "normal" ? 5 : 0;

  const { resultado, pages, results } = FiltradoRecomendacion(
    generosFormateados,
    lanzamiento,
    plataforma,
    valoracionNumerica,
    page,
    tipo
  );

  return (
    <>
      <div className="bg-stone-950">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <PasaPagina
            page={page}
            setPage={setPage}
            totalPaginas={pages}
            totalResultados={results}
          />
          {loading && (
            <div className="absolute z-10 inset-0 bg-stone-950 bg-opacity-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
          )}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {resultado.map((movie) => (
              <div key={movie.id}>
                <div className="relative">
                  <Puntuacion puntuacion={movie.vote_average} />
                  <Tarjeta
                    id={movie.id}
                    tipo={tipo === "tv" ? "Series" : "Peliculas"}
                    nombre={movie.name || movie.title}
                    imagen={movie.poster_path}
                    loading={loading}
                    setLoading={setLoading}
                    valoracion={movie.vote_average}
                  />
                </div>
              </div>
            ))}
          </div>
          <PasaPagina page={page} setPage={setPage} totalPaginas={pages} />
        </div>
      </div>
    </>
  );
}
