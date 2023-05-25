import { useEffect, useState } from "react";

const HomeApi = () => {
  const [mejoresPeliculasHoy, setMejoresPeliculasHoy] = useState([]);
  const [mejoresSeriesHoy, setMejoresSeriesHoy] = useState([]);
  const [mejoresActoresHoy, setMejoresActoresHoy] = useState([]);

  useEffect(() => {
    const mejoresPeliculasHoy = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&include_adult=false&include_video=false&sort_by=vote_average.desc`
      );

      const data = await response.json();
      setMejoresPeliculasHoy(data.results.slice(0,3));
    };

    const mejoresSeriesHoy = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setMejoresSeriesHoy(data.results.slice(0,3));
    };

    const mejoresActoresHoy = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );

      const data = await response.json();
      setMejoresActoresHoy(data.results.slice(0,3));
    };

    mejoresPeliculasHoy();
    mejoresSeriesHoy();
    mejoresActoresHoy();
  }, []);
  return { mejoresPeliculasHoy, mejoresSeriesHoy, mejoresActoresHoy };
};

export default HomeApi;
