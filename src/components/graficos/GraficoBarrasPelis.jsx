import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const GraficoBarrasPelis = ({ pelis, titulo }) => {
  //Genera un array con el año de cada pelicula
  const anios = pelis?.map((peli) => peli.release_date.slice(0, 4));

  //Genera un array con los años únicos
  const aniosUnicos = Array.from(new Set(anios));

  //Genera un array de objetos con el año y la cantidad de peliculas
  const cantidadPelis = aniosUnicos.map((anio) => {
    const cantidad = pelis.filter(
      (peli) => peli.release_date.slice(0, 4) === anio
    ).length;
    return {
      anio: anio,
      cantidad: cantidad,
    };
  });

  //Ordena el array por año
  cantidadPelis.sort((a, b) => a.anio - b.anio);

  //Genera un array con los años
  const labels = cantidadPelis.map((peli) => peli.anio);

  //Genera un array con la cantidad de peliculas
  const cantidad = cantidadPelis.map((peli) => peli.cantidad);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Películas",
        data: cantidad,
        backgroundColor: "#F59E0B",
        borderColor: "#F59E0B",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-3">{titulo}</h2>
        <div className="flex flex-col items-center">
          <div className="">
            <Bar
              data={data}
              options={{
                responsive: true,
              }}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};
