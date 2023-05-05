import Perfil from "../api/Perfil";
import { UserContext } from "../_app";
import { useContext, useEffect, useState } from "react";
import Cabecera from "@/components/cuenta/Cabecera";

const Cuenta = () => {
  const { sessionId, username } = useContext(UserContext);
  const [filter, setFilter] = useState("peliculasVistas");
  const [series, setSeries] = useState([]);
  const [peliculas, setPeliculas] = useState([]);

  const [loading, setLoading] = useState(true);
  const {
    datos,
    peliculasVistas,
    seriesVistas,
    peliculasFavoritas,
    seriesFavoritas,
    peliculasPendientes,
    seriesPendientes,
    ultimaPeliculaVista,
    ultimaSerieVista,
    ultimaPeliculaPendiente,
    ultimaSeriePendiente,
    ultimaPeliculaFavorita,
    ultimaSerieFavorita,
  } = Perfil(sessionId);

  console.log("ultima pelicula vista", ultimaPeliculaVista);
  console.log("ultima serie vista", ultimaSerieVista);
  console.log("ultima pelicula pendiente", ultimaPeliculaPendiente);
  console.log("ultima serie pendiente", ultimaSeriePendiente);
  console.log("ultima pelicula favorita", ultimaPeliculaFavorita);
  console.log("ultima serie favorita", ultimaSerieFavorita);

  useEffect(() => {
    if (datos.id) {
      localStorage.setItem("userId", datos.id);
      setLoading(false);
    }
  }, [datos.id]);

  useEffect(() => {
    if (!loading) {
      if (filter === "peliculasVistas") {
        setPeliculas(peliculasVistas);
      } else if (filter === "seriesVistas") {
        setSeries(seriesVistas);
      } else if (filter === "peliculasFavoritas") {
        setPeliculas(peliculasFavoritas);
      } else if (filter === "seriesFavoritas") {
        setSeries(seriesFavoritas);
      } else if (filter === "peliculasPendientes") {
        setPeliculas(peliculasPendientes);
      } else if (filter === "seriesPendientes") {
        setSeries(seriesPendientes);
      }
    }
  }, [
    filter,
    loading,
    peliculasVistas,
    seriesVistas,
    peliculasFavoritas,
    seriesFavoritas,
    peliculasPendientes,
    seriesPendientes,
  ]);

  // Sacamos un número aleatorio para sacar una foto favorita aleatoria
  const fotoPeli =
    peliculasFavoritas && peliculasFavoritas.total_results > 0
      ? Math.floor(Math.random() * (peliculasFavoritas.total_results - 1))
      : 0;

  // Sacamos una foto aleatoria de las series favoritas
  const backgroundImage =
    peliculasFavoritas &&
    peliculasFavoritas.results &&
    peliculasFavoritas.results.length > 0
      ? `url('https://image.tmdb.org/t/p/original${peliculasFavoritas.results[fotoPeli]?.backdrop_path}')`
      : "none";

  if (!sessionId) return null;

  return (
    <>
      <Cabecera
        peliculasVistas={peliculasVistas}
        seriesVistas={seriesVistas.results}
        peliculasFavoritas={peliculasFavoritas.results}
        seriesFavoritas={seriesFavoritas.results}
        peliculasPendientes={peliculasPendientes.results}
        seriesPendientes={seriesPendientes.results}
        nombre={datos.name}
        backgroundImage={backgroundImage}
        fotoPerfil={datos.avatar?.tmdb.avatar_path}
      />
      {/* <div className="container mt-5 mb-5 mx-auto">
        <Filtrado setFilter={setFilter} username={username} />
      </div>
      <div className="container mx-auto">
        <ResultadoFiltrado peliculas={peliculas} series={series} />
      </div> */}
    </>
  );
};

export default Cuenta;
