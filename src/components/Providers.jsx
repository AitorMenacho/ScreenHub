import Image from "next/image";
import { useState } from "react";

export default function Providers({ providers }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-3">¿Donde verlo?</h2>
      <p className="pb-2 mb-3">contenido sacado de JustWatch</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
        {providers &&
          providers.flatrate &&
          providers.flatrate.map((provider) => (
            <div
              key={provider.provider_name}
              className="text-center flex flex-col items-center"
            >
              {loading && (
                <div className="absolute z-10 inset-0 bg-stone-950 bg-opacity-50 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
                </div>
              )}
              <Image
                className="rounded-full w-24 h-24 object-cover mb-3"
                src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                alt={provider.provider_name}
                onLoad={() => setLoading(false)}
                width={100}
                height={100}
                quality={50}
              />
              <span className="font-bold">{provider.provider_name}</span>{" "}
            </div>
          ))}
      </div>
    </div>
  );
}
