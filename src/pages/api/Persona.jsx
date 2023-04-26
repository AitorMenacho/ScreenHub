const { useState, useEffect } = require("react");

const Persona = (idPersona) => {
  const [persona, setPersona] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getPersona = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${idPersona}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setPersona(data);
    };

    const getPeliculas = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${idPersona}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setPeliculas(data);
    };

    const getSeries = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${idPersona}/tv_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setSeries(data);
    };

    getPersona();
    getPeliculas();
    getSeries();
  }, [idPersona]);

  return { persona, peliculas, series };
};

export default Persona;
