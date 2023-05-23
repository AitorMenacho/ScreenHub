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

const GraficoBarrasSeries = ({ series, titulo }) => {
  //Genera un array con el año de cada serie
  const anios = series?.map((serie) => serie.first_air_date.slice(0, 4));

  //Genera un array con los años únicos
  const aniosUnicos = Array.from(new Set(anios));

  //Genera un array de objetos con el año y la cantidad de series
  const cantidadSeries = aniosUnicos.map((anio) => {
    const cantidad = series.filter(
      (serie) => serie.first_air_date.slice(0, 4) === anio
    ).length;
    return {
      anio: anio,
      cantidad: cantidad,
    };
  });

  //Ordena el array por año
  cantidadSeries.sort((a, b) => a.anio - b.anio);

  //Genera un array con los años
  const labels = cantidadSeries.map((serie) => serie.anio);

  //Genera un array con la cantidad de series
  const cantidad = cantidadSeries.map((serie) => serie.cantidad);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Series",
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

export default GraficoBarrasSeries;
