import { useEffect, useState } from "react";

const Buscar = (search, page) => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [results, setResults] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&query=${search}&page=${page}`
      );
      const data = await response.json();
      setResults(data.total_results);
      setPages(data.total_pages);
      setMovies(data.results);
    };

    getMovies();
  }, [search, page]);

  return { movies, pages, results };
};

export default Buscar;
