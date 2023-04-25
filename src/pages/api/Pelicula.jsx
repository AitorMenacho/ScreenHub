import { useEffect, useState } from "react";

const Pelicula = (idPelicula) => {
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setMovie(data);
    };

    const getActors = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setActors(data.cast);
    };

    getActors();
    getMovie();
  }, [idPelicula]);

  return { movie, actors };
};

export default Pelicula;
