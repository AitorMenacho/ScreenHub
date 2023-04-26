import { useEffect, useState } from "react";

const Series = (idSerie) => {
  const [tvShow, SetTvShow] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getTvShow = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      SetTvShow(data);
    };

    const getActors = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setActors(data.cast);
    };

    const getTrailer = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setTrailer(data.results[0]);
    };

    const getRecomendation = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1`
      );

      const data = await response.json();
      setRecomendation(data.results);
    };

    const getReviews = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1`
      );

      const data = await response.json();
      setReviews(data.results);
    };

    getReviews();
    getRecomendation();
    getTrailer();
    getActors();
    getTvShow();
  }, [idSerie]);

  return { tvShow, actors, trailer, recomendation, reviews };
};

export default Series;
