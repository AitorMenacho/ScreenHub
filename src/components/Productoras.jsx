import Image from "next/image";
import Link from "next/link";

export default function Productoras({ productoras }) {
  return (
    <div className="container mx-auto my-5 bg-stone-800 p-5 mt-5 rounded-xl">
      <h2 className="text-xl font-bold mb-5">Productoras</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {productoras &&
          productoras.map((company) => (
            <Link
              key={company.id}
              href="/productora/[id]"
              as={`/productora/${company.id}`}
            >
              <div className="w-40 h-40 flex flex-col items-center border-slate-950 border-2 rounded-xl justify-center p-3 hover:border-yellow-400 transition-all duration-500">
                {company.logo_path == null ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                ) : (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                    alt={company.name}
                    width={200}
                    height={200}
                    className="object-contain"
                    style={{ maxHeight: "6vh" }}
                  />
                )}
                <p className="text-center font-semibold">{company.name}</p>
              </div>
            </Link>
          ))}
        {!productoras && <p className="text-2xl">Sin datos</p>}
      </div>
    </div>
  );
}
