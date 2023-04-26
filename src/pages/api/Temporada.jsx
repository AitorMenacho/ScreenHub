import { useEffect, useState } from "react";

const Temporada = (idSerie, idTemporada) => {
  const [temporada, SetTemporada] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const getTemporada = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/season/${idTemporada}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
      );
      const data = await response.json();
      SetTemporada(data);
    };

    const getImagenes = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idSerie}/season/${idTemporada}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const data = await response.json();
      setImagenes(data.posters);
    };

    getImagenes();
    getTemporada();
  }, [idSerie]);

  return { temporada, imagenes };
};

export default Temporada;
