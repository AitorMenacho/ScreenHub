import Link from "next/link";

export default function Saga({ saga }) {
  return (
    <div className="container mx-auto my-5">
      <h2 className="text-4xl font-bold mb-3">Saga</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 p-2">
          {saga && saga.poster_path ? (
            <Link href={`/Sagas/${saga.id}`}>
              <div
                className="relative bg-cover bg-center bg-no-repeat bg-stone-950 hover:bg-transparent transition-all duration-500 bg-opacity-50 bg-blend-darken rounded-lg w-full"
                style={{
                  backgroundImage: `url('https://image.tmdb.org/t/p/original${saga.poster_path}')`,
                  height: "50vh",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent"></div>
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">{saga.name}</h3>
                </div>
              </div>
            </Link>
          ) : (
            <div
              className="relative bg-cover bg-center bg-no-repeat bg-gray-900 bg-opacity-50 bg-blend-darken rounded-lg"
              style={{
                backgroundImage: `url('https://via.placeholder.com/300x450/000000/FFFFFF/?text=Sin%20saga')`,
                height: "40vh",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent hover:bg-gradient-to-t hover:from-yellow-400 hover:to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
