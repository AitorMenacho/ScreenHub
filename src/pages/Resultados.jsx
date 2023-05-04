import { useRouter } from "next/router";
import Buscar from "./api/Buscar";
import { useState } from "react";
import PasaPagina from "@/components/PasaPagina";
import { Tarjeta } from "@/components/resultados/Tarjeta";
import { Puntuacion } from "@/components/puntuacion";

const Resultados = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { search } = router.query;

  const { movies, pages, results } = Buscar(search, page);

  if (!movies) return null;

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
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
              <div className="relative" key={movie.id}>
                <Puntuacion puntuacion={movie.vote_average} />
                <Tarjeta
                  id={movie.id}
                  tipo={
                    movie.media_type === "tv"
                      ? "Series"
                      : movie.media_type === "movie"
                      ? "Peliculas"
                      : "Persona"
                  }
                  nombre={movie.name}
                  imagen={
                    movie.media_type === "person"
                      ? movie.profile_path
                      : movie.poster_path
                  }
                  loading={loading}
                  setLoading={setLoading}
                />
              </div>
            ))}
          </div>
          <PasaPagina page={page} setPage={setPage} totalPaginas={pages} />
        </div>
      </div>
    </>
  );
};

export default Resultados;
