const { useEffect, useState } = require("react");

const PeliculasApi = () => {
  const [mejorValoradas, setMejorValoradas] = useState([]);
  const [populares, setPopulares] = useState([]);
  const [proximosEstrenos, setProximosEstrenos] = useState([]);
  const [cartelera, setCartelera] = useState([]);
  const [tendencia, setTendencia] = useState([]);

  useEffect(() => {
    //Petición que me devuelve las películas mejor valoradas
    const getMejorValoradas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setMejorValoradas(data.results);
    };

    //Petición que me devuelve las películas populares
    const getPopulares = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setPopulares(data.results);
    };

    //Petición que me devuelve las películas que se estrenarán próximamente
    const getProximosEstrenos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setProximosEstrenos(data.results);
    };

    //Petición que me devuelve las películas que están en cartelera
    const getCartelera = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setCartelera(data.results);
    };

    //Petición que me devuelve las películas que están en tendencia
    const getTendencia = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1&region=es`
      );
      const data = await response.json();
      setTendencia(data.results);
    };

    getMejorValoradas();
    getPopulares();
    getProximosEstrenos();
    getCartelera();
    getTendencia();
  }, []);

  return { mejorValoradas, populares, proximosEstrenos, cartelera, tendencia };
};

export default PeliculasApi;
