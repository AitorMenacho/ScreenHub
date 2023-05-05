import Image from "next/image";
import Perfil from "../api/Perfil";
import ListadoPeliculas from "@/components/ListadoPeliculas";
import { UserContext } from "../_app";
import { useContext, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Filtrado from "@/components/cuenta/Filtrado";
import ResultadoFiltrado from "@/components/cuenta/ResultadoFiltrado";
import Cabecera from "@/components/cuenta/Cabecera";

const Cuenta = () => {
  const { sessionId, username } = useContext(UserContext);
  const [filter, setFilter] = useState("vistas");
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);

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
  }, [datos.id]);

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

  const fotoPerfil = datos && datos.avatar?.tmdb.avatar_path;

  console.log(ultimaPeliculaVista);

  return (
    <>
      <Cabecera
        fotoPerfil={fotoPerfil}
        backgroundImage={backgroundImage}
        nombre={datos.name}
        peliculasVistas={ultimaPeliculaVista}
      />
      <Filtrado setFilter={setFilter} username={username} />
      <ResultadoFiltrado peliculas={peliculas} series={series} />
    </>
  );
};

export default Cuenta;
