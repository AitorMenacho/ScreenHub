import Generos from "@/pages/api/generos";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const GraficoTartaPelis = ({ pelis, titulo }) => {
  const [categoriaMasFuere, setCategoriaMasFuerte] = useState("");
  const { generosPeliculas } = Generos();

  // Genera un array con el id principal de cada pelicula
  const categoriasUnicas = Array.from(
    new Set(pelis?.map((peli) => peli.genre_ids[0]))
  );

  // Generar un array de objetos con el id del primer género y la cantidad de peliculas vistas
  const cantidadPelisVistas = categoriasUnicas.map((categoria) => {
    const cantidad = pelis.filter(
      (peli) => peli.genre_ids[0] === categoria
    ).length;
    return {
      generoId: categoria,
      cantidad: cantidad,
    };
  });

  // Contar cuántas categorías hay
  const cantidadCategorias = categoriasUnicas.length;

  // Cambiamos los ids de los géneros por sus nombres
  cantidadPelisVistas.forEach((categoria) => {
    const genero = generosPeliculas.find(
      (genero) => genero.id === categoria.generoId
    );
    categoria.generoId = genero?.name;
  });

  // Generar un array de colores
  const colores = Array.from({ length: cantidadCategorias }, (_, index) => {
    // Generar colores aleatorios en formato RGBA
    const rgba = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 1)`;
    return rgba;
  });

  const data = {
    labels: cantidadPelisVistas.map((categoria) => categoria.generoId),
    datasets: [
      {
        label: "Películas",
        data: cantidadPelisVistas.map((categoria) => categoria.cantidad),
        backgroundColor: colores,
        borderColor: colores.map((color) => color.replace("0.2", "1")),
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const categoriaMasFuerte = cantidadPelisVistas.reduce((acc, curr) =>
      acc.cantidad > curr.cantidad ? acc : curr
    );
    setCategoriaMasFuerte(categoriaMasFuerte.generoId);
  }, [cantidadPelisVistas]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "30rem" }}
      >
        <div>
          <h2 className="text-xl font-bold mb-3 text-center">{titulo}</h2>
          <Pie
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-white mt-5">
            Categoría más fuerte
          </h2>
          <p className="text-center text-lg">{categoriaMasFuere}</p>
        </div>
      </div>
    </>
  );
};
