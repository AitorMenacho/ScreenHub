import { useEffect, useState } from "react";

const Generos = () => {
  const [generosSeries, setGenerosSeries] = useState([]);
  const [generosPeliculas, setGenerosPeliculas] = useState([]);

  useEffect(() => {
    const gerGenerosSeries = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setGenerosSeries(data.genres);
    };

    const gerGenerosPeliculas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setGenerosPeliculas(data.genres);
    };

    gerGenerosSeries();
    gerGenerosPeliculas();
  }, []);

  return { generosSeries, generosPeliculas };
};

export default Generos;
