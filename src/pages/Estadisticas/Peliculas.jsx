import { useContext, useState } from "react";
import { UserContext } from "../_app";
import Perfil from "../api/Perfil";
import { GraficoTartaPelis } from "@/components/graficos/GraficoTartaPelis";
import { GraficoBarrasPelis } from "@/components/graficos/GraficoBarrasPelis";

const Peliculas = () => {
  const { sessionId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const { peliculasVistas, peliculasPendientes, peliculasFavoritas } = Perfil(
    sessionId,
    setLoading
  );

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-stone-800 rounded-xl w-2/3 flex flex-col p-10 mt-5">
              <h2 className="text-3xl font-bold text-white mb-5 text-center">
                Películas vistas
              </h2>
              <div className="flex flex-wrap justify-between">
                {peliculasVistas.totalResults.length > 0 ? (
                  <>
                    <GraficoTartaPelis
                      pelis={peliculasVistas.totalResults}
                      titulo={"Cantidad de películas por categoría"}
                    />
                    <GraficoBarrasPelis
                      pelis={peliculasVistas.totalResults}
                      titulo={"Cantidad de películas por año"}
                    />
                  </>
                ) : (
                  <h2 className="text-3xl font-bold text-white mb-5 text-center">
                    No hay películas vistas
                  </h2>
                )}
              </div>
            </div>
            <div className="bg-stone-800 rounded-xl w-2/3 flex flex-col p-10 mt-5">
              <h2 className="text-3xl font-bold text-white mb-5 text-center">
                Películas pendientes
              </h2>
              <div className="flex flex-wrap justify-between">
                {peliculasPendientes.totalResults.length > 0 ? (
                  <>
                    <GraficoTartaPelis
                      pelis={peliculasPendientes.totalResults}
                      titulo={"Cantidad de películas por categoría"}
                    />
                    <GraficoBarrasPelis
                      pelis={peliculasPendientes.totalResults}
                      titulo={"Cantidad de películas por año"}
                    />
                  </>
                ) : (
                  <h2 className="text-3xl font-bold text-white mb-5 text-center">
                    No hay películas pendientes
                  </h2>
                )}
              </div>
            </div>
            <div className="bg-stone-800 rounded-xl w-2/3 flex flex-col p-10 mt-5">
              <h2 className="text-3xl font-bold text-white mb-5 text-center">
                Películas favoritas
              </h2>
              <div className="flex flex-wrap justify-between">
                {peliculasFavoritas.totalResults.length > 0 ? (
                  <>
                    <GraficoTartaPelis
                      pelis={peliculasFavoritas.totalResults}
                      titulo={"Cantidad de películas por categoría"}
                    />
                    <GraficoBarrasPelis
                      pelis={peliculasFavoritas.totalResults}
                      titulo={"Cantidad de películas por año"}
                    />
                  </>
                ) : (
                  <h2 className="text-3xl font-bold text-white mb-5 text-center">
                    No hay películas favoritas
                  </h2>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Peliculas;
