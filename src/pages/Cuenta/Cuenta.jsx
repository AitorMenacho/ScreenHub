import Perfil from "../api/Perfil";
import { UserContext } from "../_app";
import { useContext, useEffect, useState } from "react";
import Filtrado from "@/components/cuenta/Filtrado";
import ResultadoFiltrado from "@/components/cuenta/ResultadoFiltrado";
import Cabecera from "@/components/cuenta/Cabecera";
import logo from "public/logoSolo.png";

const Cuenta = () => {
  const { sessionId, username } = useContext(UserContext);
  const [filter, setFilter] = useState("peliculasVistas");
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [loading, setLoading] = useState(true);

  // Ponemos loading en true para que se muestre el spinner
  useEffect(() => {
    setLoading(true);
  }, []);

  // Sacamos los datos del usuario
  const {
    datos,
    peliculasVistas,
    seriesVistas,
    peliculasFavoritas,
    seriesFavoritas,
    peliculasPendientes,
    seriesPendientes,
  } = Perfil(sessionId, setLoading);

  useEffect(() => {
    if (datos.id) {
      localStorage.setItem("userId", datos.id);
    }

    // Sacamos un número aleatorio para sacar una foto favorita aleatoria
    const fotoPeli =
      peliculasFavoritas && peliculasFavoritas.length > 0
        ? Math.floor(Math.random() * (peliculasFavoritas.length - 1))
        : 0;

    // Sacamos una foto aleatoria de las series favoritas

    let background;

    if (
      peliculasFavoritas &&
      peliculasFavoritas.totalResults &&
      peliculasFavoritas.totalResults.length > 0
    ) {
      background = `url('https://image.tmdb.org/t/p/original${peliculasFavoritas.totalResults[fotoPeli]?.backdrop_path}')`;
    } else if (
      seriesFavoritas &&
      seriesFavoritas.totalResults &&
      seriesFavoritas.totalResults.length > 0
    ) {
      background = `url('https://image.tmdb.org/t/p/original${seriesFavoritas.totalResults[0]?.backdrop_path}')`;
    } else if (
      peliculasVistas &&
      peliculasVistas.totalResults &&
      peliculasVistas.totalResults.length > 0
    ) {
      background = `url('https://image.tmdb.org/t/p/original${peliculasVistas.totalResults[0]?.backdrop_path}')`;
    } else if (
      seriesVistas &&
      seriesVistas.totalResults &&
      seriesVistas.totalResults > 0
    ) {
      background = `url('https://image.tmdb.org/t/p/original${seriesVistas.totalResults[0]?.backdrop_path}')`;
    } else if (
      peliculasPendientes &&
      peliculasPendientes.totalResults &&
      peliculasPendientes.totalResults.length > 0
    ) {
      background = `url('https://image.tmdb.org/t/p/original${peliculasPendientes.totalResults[0]?.backdrop_path}')`;
    } else if (
      seriesPendientes &&
      seriesPendientes.totalResults &&
      seriesPendientes.totalResults.length > 0
    ) {
      background = `url('https://image.tmdb.org/t/p/original${seriesPendientes.totalResults[0]?.backdrop_path}')`;
    } else {
      background = `url('https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg')`;
    }

    setBackgroundImage(background);

    setFotoPerfil(datos && datos.avatar?.tmdb.avatar_path);
  }, [
    datos.id,
    peliculasFavoritas,
    seriesFavoritas,
    peliculasVistas,
    seriesVistas,
    peliculasPendientes,
    seriesPendientes,
    datos,
  ]);

  useEffect(() => {
    if (filter === "peliculasVistas") {
      setPeliculas(peliculasVistas.totalResults);
      setSeries([]);
    }
    if (filter === "peliculasFavoritas") {
      setPeliculas(peliculasFavoritas.totalResults);
      setSeries([]);
    }
    if (filter === "peliculasPendientes") {
      setPeliculas(peliculasPendientes.totalResults);
      setSeries([]);
    }
    if (filter === "seriesVistas") {
      setSeries(seriesVistas.totalResults);
      setPeliculas([]);
    }
    if (filter === "seriesFavoritas") {
      setSeries(seriesFavoritas.totalResults);
      setPeliculas([]);
    }
    if (filter === "seriesPendientes") {
      setSeries(seriesPendientes.totalResults);
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
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : (
        <>
          <Cabecera
            fotoPerfil={
              fotoPerfil !== null
                ? `https://image.tmdb.org/t/p/w500${fotoPerfil}`
                : logo
            }
            backgroundImage={backgroundImage}
            nombre={datos.name}
            peliculasVistas={peliculasVistas}
            seriesVistas={seriesVistas}
            peliculasPendientes={peliculasPendientes}
            seriesPendientes={seriesPendientes}
            peliculasFavoritas={peliculasFavoritas}
            seriesFavoritas={seriesFavoritas}
          />
          <Filtrado setFilter={setFilter} username={username} />
          <ResultadoFiltrado peliculas={peliculas} series={series} />
        </>
      )}
    </>
  );
};

export default Cuenta;
