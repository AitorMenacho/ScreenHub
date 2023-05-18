import { useEffect, useState } from "react";

export default function ProductoraApi(id) {
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const getDatos = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/company/82819?api_key=b9ec2cca0d74725e96124ea337e06c73`
      );
      const data = await res.json();
      setDatos(data);
    };

    const getPeliculas = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&sort_by=popularity.desc&with_companies=${id}`
      );
      const data = await res.json();
      setPeliculas(data.results);
    };

    const getSeries = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&sort_by=popularity.desc&with_companies=${id}`
      );
      const data = await res.json();
      setSeries(data.results);
    };

    getDatos();
    getPeliculas();
    getSeries();
  }, [id]);

  return {
    datos,
    peliculas,
    series,
  };
}
