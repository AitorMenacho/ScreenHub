import { useEffect, useState } from "react";

export default function FiltradoRecomendacion(
  generos,
  fechaLanzamiento,
  plataformas,
  valoracion,
  page,
  tipo
) {
  const [resultado, setResultado] = useState([]);
  const [pages, setPages] = useState(0);
  const [results, setResults] = useState(0);

  useEffect(() => {
    const getFiltrado = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/${tipo}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${fechaLanzamiento[0]}-01-01&primary_release_date.lte=${fechaLanzamiento[1]}-12-31&with_genres=${generos}&with_watch_providers=${plataformas}&watch_region=ES&vote_average.gte=${valoracion}`
      );

      const data = await response.json();
      setResultado(data.results);
      setResults(data.total_results);
      setPages(data.total_pages);
    };

    getFiltrado();
  }, [generos, fechaLanzamiento, plataformas, valoracion, page, tipo]);

  return { resultado, pages, results };
}
