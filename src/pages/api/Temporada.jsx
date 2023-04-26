import { useEffect, useState } from "react";

const Temporada = (idSerie, idTemporada) => {
  const [temporada, SetTemporada] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    const getTemporada = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/season/${idTemporada}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      SetTemporada(data);
    };

    const getActors = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/season/${idTemporada}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      setActors(data.cast);
    };

    // const getTrailer = async () => {
    //   const response = await fetch(
    //     `https://api.themoviedb.org/3/tv/${idSerie}/season/${temporada}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
    //   );

    //   const data = await response.json();
    //   setTrailer(data.results[0]);
    // };

    // getTrailer();
    getActors();
    getTemporada();
  }, [idSerie]);

  return { temporada, actors, trailer };
};

export default Temporada;
