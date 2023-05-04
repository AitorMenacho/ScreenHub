import { useRouter } from "next/router";
import SagasApi from "../api/Sagas";
import Image from "next/image";
import Link from "next/link";

const Sagas = () => {
  const router = useRouter();
  const { id } = router.query;

  const { saga } = SagasApi(id);

  if (!saga) return null;

  return (
    <>
      <div
        className="relative py-32 bg-stone-950 bg-opacity-50 bg-blend-darken"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${saga.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="container mx-auto px-4 pb-16 pt-16">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/4 px-4">
              <div className="flex flex-col items-center">
                <div>
                  <Image
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/w500${saga.poster_path}`}
                    alt={saga.name}
                    width={500}
                    height={750}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/4 px-4">
              <h3 className="text-2xl font-bold">Películas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {saga &&
                  saga.parts &&
                  saga.parts.map((movie) => (
                    <div key={movie.id} className="flex flex-col items-center">
                      <Link href={`/Peliculas/${movie.id}`}>
                        <Image
                          className="rounded-lg"
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          width={500}
                          height={750}
                        />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sagas;
