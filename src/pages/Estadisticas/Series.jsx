import { useContext, useState } from "react";
import Perfil from "../api/Perfil";
import { UserContext } from "../_app";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Series = () => {
  const { sessionId } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [generosVistasTotal, setGenerosVistasTotal] = useState([]);
  const [generosPendientesTotal, setGenerosPendientesTotal] = useState([]);
  const [generosFavoritasTotal, setGenerosFavoritasTotal] = useState([]);

  const { seriesVistas, seriesPendientes, seriesFavoritas } = Perfil(
    sessionId,
    setLoading
  );

  // Sacamos los generos de las series vistas
  const generosVistas = seriesVistas?.totalResults?.map((serie) => {
    return serie.genre_ids;
  });

  // Sacamos los generos de las series pendientes
  const generosPendientes = seriesPendientes?.totalResults?.map((serie) => {
    return serie.genre_ids;
  });

  // Sacamos los generos de las series favoritas
  const generosFavoritas = seriesFavoritas?.totalResults?.map((serie) => {
    return serie.genre_ids;
  });

  // Sacamos los generos de las series vistas y los sumamos para sacar el total de cada uno y lo guardamos en un objeto
  const generosVistasSumados = generosVistas?.reduce((acc, genero) => {
    genero.forEach((genero) => {
      if (acc[genero]) {
        acc[genero].totalResults++;
      } else {
        acc[genero] = {
          totalResults: 1,
          name: genero,
        };
      }
    });

    setGenerosVistasTotal(acc);
  }, {});

  console.log(generosVistasTotal);

  const [chartData, setChartData] = useState({
    labels: generosVistasTotal?.map((genero) => genero.name),
    datasets: [
      {
        label: "Users Gained ",
        data: generosVistasTotal?.map((genero) => genero.totalResults),
        backgroundColor: ["#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : (
        <>{<Doughnut data={chartData} />}</>
      )}
    </>
  );
};

export default Series;
