const { useEffect, useState } = require("react");

const Perfil = (idSession, setLoading) => {
  const [datos, setDatos] = useState([]);
  const [peliculasVistas, setPeliculasVistas] = useState([]);
  const [seriesVistas, setSeriesVistas] = useState([]);
  const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);
  const [seriesFavoritas, setSeriesFavoritas] = useState([]);
  const [peliculasPendientes, setPeliculasPendientes] = useState([]);
  const [seriesPendientes, setSeriesPendientes] = useState([]);
  const [listas, setListas] = useState([]);

  useEffect(() => {
    if (idSession.length > 0) {
      //Petición que me devuelve los datos del usuario
      const getDatos = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}`
        );
        const data = await response.json();
        setDatos(data);
      };

      //Petición que me devuelve las películas vistas del usuario
      const getPeliculasVistas = async (page = 1, totalResults = []) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${datos.id}/rated/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=${page}`
        );
        const data = await response.json();
        totalResults = [...totalResults, ...data.results];

        if (data.total_pages > page) {
          return getPeliculasVistas(page + 1, totalResults);
        } else {
          setPeliculasVistas({ totalResults });
        }
      };

      //Petición que me devuelve las series vistas del usuario
      const getSeriesVistas = async (page = 1, totalResults = []) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${datos.id}/rated/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=${page}`
        );
        const data = await response.json();
        totalResults = [...totalResults, ...data.results];

        if (data.total_pages > page) {
          return getSeriesVistas(page + 1, totalResults);
        } else {
          setSeriesVistas({ totalResults });
        }
      };

      //Petición que me devuelve las películas favoritas del usuario
      const getPeliculasFavoritas = async (page = 1, totalResults = []) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${datos.id}/favorite/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=${page}`
        );
        const data = await response.json();
        totalResults = [...totalResults, ...data.results];

        if (data.total_pages > page) {
          return getPeliculasFavoritas(page + 1, totalResults);
        } else {
          setPeliculasFavoritas({ totalResults });
        }
      };

      //Petición que me devuelve las series favoritas del usuario
      const getSeriesFavoritas = async (page = 1, totalResults = []) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${datos.id}/favorite/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=${page}`
        );
        const data = await response.json();
        totalResults = [...totalResults, ...data.results];

        if (data.total_pages > page) {
          return getSeriesFavoritas(page + 1, totalResults);
        } else {
          setSeriesFavoritas({ totalResults });
        }
      };

      //Petición que me devuelve las películas pendientes del usuario
      const getPeliculasPendientes = async (page = 1, totalResults = []) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${datos.id}/watchlist/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=${page}`
        );
        const data = await response.json();
        totalResults = [...totalResults, ...data.results];

        if (data.total_pages > page) {
          return getPeliculasPendientes(page + 1, totalResults);
        } else {
          setPeliculasPendientes({ totalResults });
        }
      };

      //Petición que me devuelve las series pendientes del usuario
      const getSeriesPendientes = async (page = 1, totalResults = []) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${datos.id}/watchlist/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=${page}`
        );
        const data = await response.json();
        totalResults = [...totalResults, ...data.results];

        if (data.total_pages > page) {
          return getSeriesPendientes(page + 1, totalResults);
        } else {
          setSeriesPendientes({ totalResults });
        }
      };

      //Petición que me devuelve las listas del usuario
      const getListas = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${datos.id}/lists?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
        );
        const data = await response.json();
        setListas(data);
      };

      getDatos();
      getPeliculasVistas();
      getSeriesVistas();
      getPeliculasFavoritas();
      getSeriesFavoritas();
      getPeliculasPendientes();
      getSeriesPendientes();
      getListas();

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [idSession, datos.id, setLoading]);

  return {
    datos,
    peliculasVistas,
    seriesVistas,
    peliculasFavoritas,
    seriesFavoritas,
    peliculasPendientes,
    seriesPendientes,
    listas,
  };
};

export default Perfil;
