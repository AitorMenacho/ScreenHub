import Perfil from "../api/Perfil";
import { UserContext } from "../_app";
import { useContext, useEffect, useState } from "react";
import Filtrado from "@/components/cuenta/Filtrado";
import ResultadoFiltrado from "@/components/cuenta/ResultadoFiltrado";
import Cabecera from "@/components/cuenta/Cabecera";

const Cuenta = () => {
  const { sessionId, username } = useContext(UserContext);
  const [filter, setFilter] = useState("peliculasVistas");
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

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

  useEffect(() => {
    if (datos.id) {
      localStorage.setItem("userId", datos.id);
    }

    // Sacamos un número aleatorio para sacar una foto favorita aleatoria
    const fotoPeli =
      peliculasFavoritas && peliculasFavoritas.total_results > 0
        ? Math.floor(Math.random() * (peliculasFavoritas.total_results - 1))
        : 0;

    // Sacamos una foto aleatoria de las series favoritas
    setBackgroundImage(
      peliculasFavoritas &&
        peliculasFavoritas.results &&
        peliculasFavoritas.results.length > 0
        ? `url('https://image.tmdb.org/t/p/original${peliculasFavoritas.results[fotoPeli]?.backdrop_path}')`
        : "none"
    );

    setFotoPerfil(datos && datos.avatar?.tmdb.avatar_path);
  }, [datos.id, peliculasFavoritas, datos]);

  useEffect(() => {
    if (filter === "peliculasVistas") {
      setPeliculas(peliculasVistas.results);
      setSeries([]);
    }
    if (filter === "peliculasFavoritas") {
      setPeliculas(peliculasFavoritas.results);
      setSeries([]);
    }
    if (filter === "peliculasPendientes") {
      setPeliculas(peliculasPendientes.results);
      setSeries([]);
    }
    if (filter === "seriesVistas") {
      setSeries(seriesVistas.results);
      setPeliculas([]);
    }
    if (filter === "seriesFavoritas") {
      setSeries(seriesFavoritas.results);
      setPeliculas([]);
    }
    if (filter === "seriesPendientes") {
      setSeries(seriesPendientes.results);
      setPeliculas([]);
    }
  }, [
    filter,
    peliculasVistas,
    peliculasFavoritas,
    peliculasPendientes,
    seriesVistas,
    seriesFavoritas,
    seriesPendientes,
  ]);

  return (
    <>
      <Cabecera
        fotoPerfil={fotoPerfil}
        backgroundImage={backgroundImage}
        nombre={datos.name}
        peliculasVistas={ultimaPeliculaVista}
        seriesVistas={ultimaSerieVista}
        peliculasPendientes={ultimaPeliculaPendiente}
        seriesPendientes={ultimaSeriePendiente}
        peliculasFavoritas={ultimaPeliculaFavorita}
        seriesFavoritas={ultimaSerieFavorita}
      />
      <Filtrado setFilter={setFilter} username={username} />
      <ResultadoFiltrado peliculas={peliculas} series={series} />
    </>
  );
};

export default Cuenta;
