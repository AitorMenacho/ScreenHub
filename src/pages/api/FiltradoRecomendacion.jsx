import { useEffect, useState } from "react";

export default function FiltradoRecomendacion({ generos, fechaLanzamiento }) {
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const getFiltrado = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${fechaLanzamiento[0]}-01-01&primary_release_date.lte=${fechaLanzamiento[1]}-12-31&with_genres=${generos}`
      );

      const data = await response.json();
      setResultado(data.results);
    };
  }, [generos, fechaLanzamiento]);

  return { resultado };
}
