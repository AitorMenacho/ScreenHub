import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Temporada from "@/pages/api/Temporada";

const Temporadas = () => {
  const router = useRouter();
  const { id, temp } = router.query;

  const { temporada, imagenes } = Temporada(id, temp);

  if (!temporada) return null;

  console.log(imagenes);

  return (
    <>
      <div
        className="relative bg-cover bg-center flex justify-center items-center bg-no-repeat bg-fixed bg-gray-900 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${imagenes[1].file_path}')`,
          height: "70vh",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container columns-2 z-10">
          <div className="col-span-2">
            <Image
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${temporada.poster_path}`}
              alt={temporada.title}
              width={300}
              height={450}
            />
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl font-bold text-white">{temporada.name}</h1>
            <div className="bg-yellow-500 text-stone-950 py-2 px-4 rounded-lg my-2">
              <h3 className="text-2xl font-bold">{temporada.tagline}</h3>
            </div>
            <p className="text-white">{temporada.overview}</p>
            <p className="text-white my-1">
              <span className="font-bold">Fecha de estreno:</span>{" "}
              {temporada.air_date}
            </p>
            <p className="text-white my-1">
              <span className="font-bold">Capítulos:</span>{" "}
              {temporada.episodes && temporada.episodes.length}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-5">
        <h2 className="text-xl font-bold mb-3">Temporadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {temporada.seasons &&
            temporada.seasons.map((season) => (
              <Link
                key={season.id}
                href="[id]/Temporada/[num]"
                as={`${id}/Temporada/${season.id}`}
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="w-50 h-50 object-cover"
                    src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                    alt={season.name}
                    width={200}
                    height={200}
                  />
                  <p className="text-center font-semibold">{season.name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Temporadas;
