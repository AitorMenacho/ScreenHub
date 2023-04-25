import {
  FilmIcon,
  ListBulletIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Guarda tus listas de películas y series.",
    description:
      "Guarda tus listas de películas y series para que puedas verlas cuando quieras y compartirlas con tus amigos.",
    icon: ListBulletIcon,
  },
  {
    name: "Recomendaciones personalizadas.",
    description:
      "ScreenHub te recomienda películas y series basadas en tus gustos.",
    icon: FilmIcon,
  },
  {
    name: "Guarda listas de películas y series que quieres ver.",
    description:
      "Guarda listas de películas y series que quieres ver para que no se te pase ninguna, además, también puedes ver las listas de tus amigos.",
    icon: ServerIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2
                className="text-base font-semibold leading-7 text-indigo-600"
                style={{ color: "#FFD700" }}
              >
                ¿Que tienes?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Todo en uno
              </p>
              <p className="mt-6 text-lg leading-8">
                Puedes guardar tus películas y series favoritas en tu lista de
                favoritos, y así no perderlas de vista.s
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt
                      className="inline font-semibold"
                      style={{ color: "#FFD700" }}
                    >
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
