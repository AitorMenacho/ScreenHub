import { useContext, useState } from "react";
import Perfil from "../api/Perfil";
import { UserContext } from "../_app";
import GraficoBarras from "@/components/graficos/GraficoBarrasSeries";
import GraficoTartaSeries from "@/components/graficos/GraficoTartaSeries";
import GraficoBarrasSeries from "@/components/graficos/GraficoBarrasSeries";

const Series = () => {
  const { sessionId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const { seriesVistas, seriesPendientes, seriesFavoritas } = Perfil(
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
                Categorías vistas
              </h2>
              <div className="flex flex-wrap justify-between">
                <GraficoTartaSeries
                  seriesVistas={seriesVistas.totalResults}
                  titulo={"Cantidad de series por categoría"}
                />
                <GraficoBarrasSeries
                  series={seriesVistas.totalResults}
                  titulo={"Cantidad de series por año"}
                />
              </div>
            </div>
            <div className="bg-stone-800 rounded-xl w-2/3 flex flex-col p-10 mt-5">
              <h2 className="text-3xl font-bold text-white mb-5 text-center">
                Categorías pendientes
              </h2>
              <div className="flex flex-wrap justify-between">
                <GraficoTartaSeries
                  seriesVistas={seriesPendientes.totalResults}
                  titulo={"Cantidad de series por categoría"}
                />
                <GraficoBarrasSeries
                  series={seriesPendientes.totalResults}
                  titulo={"Cantidad de series por año"}
                />
              </div>
            </div>
            <div className="bg-stone-800 rounded-xl w-2/3 flex flex-col p-10 mt-5">
              <h2 className="text-3xl font-bold text-white mb-5 text-center">
                Categorías vistas
              </h2>
              <div className="flex flex-wrap justify-between">
                <GraficoTartaSeries
                  seriesVistas={seriesFavoritas.totalResults}
                  titulo={"Cantidad de series por categoría"}
                />
                <GraficoBarrasSeries
                  series={seriesFavoritas.totalResults}
                  titulo={"Cantidad de series por año"}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Series;
