import { useEffect, useState } from "react";

const Pelicula = (idPelicula) => {
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&append_to_response=palette`
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

    const getTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setTrailer(data.results[0]);
    };

    const getRecomendation = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1`
      );

      const data = await response.json();
      setRecomendation(data.results);
    };

    const getReviews = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${idPelicula}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1`
      );

      const data = await response.json();
      setReviews(data.results);
    };

    getReviews();
    getRecomendation();
    getTrailer();
    getActors();
    getMovie();
  }, [idPelicula]);

  return { movie, actors, trailer, recomendation, reviews };
};

export default Pelicula;
