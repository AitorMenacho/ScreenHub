const { useEffect, useState } = require("react");

const Perfil = (idSession) => {
  const [datos, setDatos] = useState([]);
  const [peliculasVistas, setPeliculasVistas] = useState([]);
  const [seriesVistas, setSeriesVistas] = useState([]);
  const [peliculasFavoritas, setPeliculasFavoritas] = useState([]);
  const [seriesFavoritas, setSeriesFavoritas] = useState([]);
  const [peliculasPendientes, setPeliculasPendientes] = useState([]);
  const [seriesPendientes, setSeriesPendientes] = useState([]);
  const [listas, setListas] = useState([]);
  const [ultimaPeliculaVista, setUltimaPeliculaVista] = useState([]);
  const [ultimaSerieVista, setUltimaSerieVista] = useState([]);
  const [ultimaPeliculaPendiente, setUltimaPeliculaPendiente] = useState([]);
  const [ultimaSeriePendiente, setUltimaSeriePendiente] = useState([]);
  const [ultimaPeliculaFavorita, setUltimaPeliculaFavorita] = useState([]);
  const [ultimaSerieFavorita, setUltimaSerieFavorita] = useState([]);

  useEffect(() => {
    //Petición que me devuelve los datos del usuario
    const getDatos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}`
      );
      const data = await response.json();
      setDatos(data);
    };

    //Petición que me devuelve las películas vistas del usuario
    const getPeliculasVistas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/rated/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
      );
      const data = await response.json();
      setPeliculasVistas(data);
    };

    //Petición que me devuelve las series vistas del usuario
    const getSeriesVistas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/rated/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
      );
      const data = await response.json();
      setSeriesVistas(data);
    };

    //Petición que me devuelve las películas favoritas del usuario
    const getPeliculasFavoritas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/favorite/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
      );
      const data = await response.json();
      setPeliculasFavoritas(data);
    };

    //Petición que me devuelve las series favoritas del usuario
    const getSeriesFavoritas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/favorite/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
      );
      const data = await response.json();
      setSeriesFavoritas(data);
    };

    //Petición que me devuelve las películas pendientes del usuario
    const getPeliculasPendientes = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/watchlist/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
      );
      const data = await response.json();
      setPeliculasPendientes(data);
    };

    //Petición que me devuelve las series pendientes del usuario
    const getSeriesPendientes = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/watchlist/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
      );
      const data = await response.json();
      setSeriesPendientes(data);
    };

    //Petición que me devuelve las listas del usuario
    const getListas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/lists?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.asc&page=1`
      );
      const data = await response.json();
      setListas(data);
    };

    //Última película vista
    const getUltimaPeliculaVista = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/rated/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=1`
      );
      const data = await response.json();
      setUltimaPeliculaVista(data);
    };

    //Última serie vista
    const getUltimaSerieVista = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/rated/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=1`
      );
      const data = await response.json();
      setUltimaSerieVista(data);
    };

    //Última película favorita
    const getUltimaPeliculaFavorita = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/favorite/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=1`
      );
      const data = await response.json();
      setUltimaPeliculaFavorita(data);
    };

    //Última serie favorita
    const getUltimaSerieFavorita = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/favorite/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=1`
      );
      const data = await response.json();
      setUltimaSerieFavorita(data);
    };

    //Última película pendiente
    const getUltimaPeliculaPendiente = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/watchlist/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=1`
      );
      const data = await response.json();
      setUltimaPeliculaPendiente(data);
    };

    //Última serie pendiente
    const getUltimaSeriePendiente = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${datos.id}/watchlist/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${idSession}&language=es-ES&sort_by=created_at.desc&page=1`
      );
      const data = await response.json();
      setUltimaSeriePendiente(data);
    };

    getDatos();
    getPeliculasVistas();
    getSeriesVistas();
    getPeliculasFavoritas();
    getSeriesFavoritas();
    getPeliculasPendientes();
    getSeriesPendientes();
    getListas();
    getUltimaPeliculaVista();
    getUltimaSerieVista();
    getUltimaPeliculaFavorita();
    getUltimaSerieFavorita();
    getUltimaPeliculaPendiente();
    getUltimaSeriePendiente();
  }, [
    idSession,
    datos.id,
    peliculasVistas.total_pages,
    seriesVistas.total_pages,
    peliculasFavoritas.total_pages,
    seriesFavoritas.total_pages,
    peliculasPendientes.total_pages,
    seriesPendientes.total_pages,
  ]);

  return {
    datos,
    peliculasVistas,
    seriesVistas,
    peliculasFavoritas,
    seriesFavoritas,
    peliculasPendientes,
    seriesPendientes,
    listas,
    ultimaPeliculaVista,
    ultimaSerieVista,
    ultimaPeliculaFavorita,
    ultimaSerieFavorita,
    ultimaPeliculaPendiente,
    ultimaSeriePendiente,
  };
};

export default Perfil;
