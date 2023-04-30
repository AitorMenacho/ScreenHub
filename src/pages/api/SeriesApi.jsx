const { useEffect, useState } = require("react");

const SeriesApi = () => {
  const [mejorValoradas, setMejorValoradas] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [proximosEstrenos, setProximosEstrenos] = useState([]);
  const [enEmision, setEnEmision] = useState([]);
  const [tendencia, setTendencia] = useState([]);

  useEffect(() => {
    //Petición que me devuelve las series mejor valoradas
    const getMejorValoradas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setMejorValoradas(data.results);
    };

    //Petición que me devuelve las series populares
    const getPopulares = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setPopulares(data.results);
    };

    //Petición que me devuelve las series que se estrenarán próximamente
    const getProximosEstrenos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setProximosEstrenos(data.results);
    };

    //Petición que me devuelve las series que están en cartelera
    const getEmision = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setEnEmision(data.results);
    };

    //Petición que me devuelve las series que están en tendencia
    const getTendencia = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setTendencia(data.results);
    };

    getMejorValoradas();
    getPopulares();
    getProximosEstrenos();
    getEmision();
    getTendencia();
  }, []);

  return { mejorValoradas, populares, proximosEstrenos, enEmision, tendencia };
};

export default SeriesApi;
