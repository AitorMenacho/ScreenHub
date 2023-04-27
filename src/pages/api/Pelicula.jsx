import { useEffect, useState } from "react";

const Pelicula = (idPelicula) => {
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Esta petición trae la información de la película
    const getMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setMovie(data);
    };

    // Esta petición trae la información de los actores
    const getActors = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setActors(data.cast);
    };

    // Esta petición trae la información del trailer
    const getTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setTrailer(data.results);
    };

    // Esta petición trae la información de las recomendaciones
    const getRecomendation = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1`
      );

      const data = await response.json();
      setRecomendation(data.results);
    };

    // Esta petición trae la información de las reviews
    const getReviews = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1`
      );

      const data = await response.json();
      setReviews(data.results);
    };

    // Esta petición trae la información de los proveedores
    const getProviders = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setProviders(data.results);
    };

    getProviders();
    getReviews();
    getRecomendation();
    getTrailer();
    getActors();
    getMovie();
  }, [idPelicula]);

  return { movie, actors, trailer, recomendation, reviews, providers };
};

export default Pelicula;
