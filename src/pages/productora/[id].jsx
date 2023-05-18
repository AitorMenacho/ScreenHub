import { useRouter } from "next/router";
import ProductoraApi from "../api/ProductoraApi";
import Image from "next/image";
import Link from "next/link";
import { ImagenPortada } from "@/components/ImagenPortada";

export default function Productora() {
  const router = useRouter();
  const { id } = router?.query;

  const { datos, peliculas, series } = ProductoraApi(id);

  if (!peliculas || !series) return null;

  let fotoPeli = "";
  let posicion = null;

  console.log(datos)

  const verTodasPeliculas = () => {
    router.push(`/Persona/${id}/Peliculas`);
  };

  const verTodasSeries = () => {
    router.push(`/Persona/${id}/Series`);
  };

  return (
    <>
      {datos && (
        <div
          className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
          style={{
            backgroundImage: `${fotoPeli}`,
            height: "70vh",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container columns-2 z-10">
            <div className="col-span-2">
              <ImagenPortada poster={datos.logo_path} titulo={datos.name} />
            </div>
            <div className="col-span-1">
              <h1 className="text-3xl font-bold text-white">{datos.name}</h1>
              <p className="text-white my-1">
                <span className="font-bold">Sede:</span> {datos.headquarters}
              </p>
              <p className="text-white my-1">
                <span className="font-bold">Fundación:</span>{" "}
                {datos.origin_country}
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Películas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {peliculas.cast &&
            peliculas.cast.slice(0, 10).map((pelis) => (
              <Link
                key={pelis.id}
                href="/Peliculas/[id]"
                as={`/Peliculas/${pelis.id}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="w-50 h-50 object-cover"
                    src={`https://image.tmdb.org/t/p/original${pelis.poster_path}`}
                    alt={pelis.title}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-semibold">{pelis.title}</p>
                </div>
              </Link>
            ))}
        </div>
        <button
          className="block mx-auto mt-5 px-4 py-2 text-stone-950 bg-yellow-500 rounded hover:bg-yellow-400"
          onClick={verTodasPeliculas}
        >
          Ver todas
        </button>
      </div>

      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Series</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {series.cast &&
            series.cast.slice(0, 10).map((series) => (
              <Link
                key={series.id}
                href="/Series/[id]"
                as={`/Series/${series.id}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="w-50 h-50 object-cover"
                    src={`https://image.tmdb.org/t/p/original${series.poster_path}`}
                    alt={series.name}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-semibold">{series.name}</p>
                </div>
              </Link>
            ))}
        </div>
        <button
          className="block mx-auto mt-5 px-4 py-2 text-stone-950 bg-yellow-500 rounded hover:bg-yellow-400"
          onClick={verTodasSeries}
        >
          Ver todas
        </button>
      </div> */}
    </>
  );
}
