import Checkbox from "@/components/recomendador/Checkbox";
import SliderFecha from "@/components/recomendador/SliderFecha";
import { useState } from "react";
import Providers from "../api/Providers";
import CheckboxPlatforma from "@/components/recomendador/CheckboxPlataformas";
import { useRouter } from "next/router";
import Generos from "../api/generos";

const MIN_FECHA_LANZAMIENTO = 1970;
const MAX_FECHA_LANZAMIENTO = new Date().getFullYear();

export default function Opciones() {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItemsProvider, setCheckedItemsProvider] = useState({});
  const [checkedItemsValoracion, setCheckedItemsValoracion] = useState({});
  const [checkedItemsTipo, setCheckedItemsTipo] = useState({});
  const [valoracion, setValoracion] = useState({});
  const [tipo, setTipo] = useState("");
  const [generos, setGeneros] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [fechaLanzamiento, setFechaLanzamiento] = useState([
    MIN_FECHA_LANZAMIENTO,
    MAX_FECHA_LANZAMIENTO,
  ]);

  const { providers } = Providers();
  const { generosSeries, generosPeliculas } = Generos();
  const router = useRouter();

  const handleCheckedboxChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });

    e.target.checked
      ? setGeneros([...generos, e.target.value])
      : setGeneros(generos.filter((genero) => genero !== e.target.value));
  };

  const handleCheckedboxProviderChange = (e) => {
    setCheckedItemsProvider({
      [e.target.id]: e.target.checked,
    });

    setPlataformas(e.target.value);
  };

  const handleCheckedboxValoracion = (e) => {
    setCheckedItemsValoracion({
      [e.target.name]: e.target.checked,
    });
    setValoracion(e.target.name);
  };

  const handleCheckedboxTipo = (e) => {
    setCheckedItemsTipo({
      [e.target.name]: e.target.checked,
    });
    setTipo(e.target.name);
    setGeneros([]);
    setCheckedItems({});
  };

  function handleClick() {
    router.push({
      pathname: "/Recomendador/Resultado",
      query: {
        genero: generos,
        plataforma: plataformas,
        lanzamiento: fechaLanzamiento,
        valoracion: valoracion,
        tipo: tipo,
      },
    });
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        ¿Necesitas ayuda?
      </h1>
      <h4>*Escoge serie o película para comenzar</h4>
      <div className="grid grid-cols-2">
        <div className="bg-stone-800 p-5 mt-5 mr-5 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-10">
            ¿Que quieres?
          </h1>
          <div className="flex flex-wrap justify-center">
            <Checkbox
              name="tv"
              label="Series"
              checked={checkedItemsTipo["tv"]}
              onChange={(e) => handleCheckedboxTipo(e)}
            />
            <Checkbox
              name="movie"
              label="Peliculas"
              checked={checkedItemsTipo["movie"]}
              onChange={(e) => handleCheckedboxTipo(e)}
            />
          </div>
        </div>
        <div className="bg-stone-800 p-5 mt-5 ml-5 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-10">
            Filtrar por valoración
          </h1>
          <div className="flex flex-wrap justify-center">
            <Checkbox
              name="calidad"
              label="Filtro de calidad"
              checked={checkedItemsValoracion["calidad"]}
              onChange={(e) => handleCheckedboxValoracion(e)}
            />
            <Checkbox
              name="normal"
              label="Filtro normal"
              checked={checkedItemsValoracion["normal"]}
              onChange={(e) => handleCheckedboxValoracion(e)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-stone-800 p-5 mt-5 mr-5 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-10">
            Filtra por género/s
          </h1>
          <div className="flex flex-wrap justify-center">
            {tipo === "tv"
              ? generosSeries.map((genero) => (
                  <Checkbox
                    key={genero.id}
                    name={genero.name}
                    label={genero.name}
                    value={genero.id}
                    checked={checkedItems[genero.name]}
                    onChange={handleCheckedboxChange}
                  />
                ))
              : generosPeliculas.map((genero) => (
                  <Checkbox
                    key={genero.id}
                    name={genero.name}
                    label={genero.name}
                    value={genero.id}
                    checked={checkedItems[genero.name]}
                    onChange={handleCheckedboxChange}
                  />
                ))}
          </div>
        </div>
        <div className="bg-stone-800 p-5 mt-5 ml-5  rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-10">
            Filtrar por año de lanzamiento
          </h1>
          <div className="flex flex-wrap justify-center">
            <SliderFecha
              min={MIN_FECHA_LANZAMIENTO}
              max={MAX_FECHA_LANZAMIENTO}
              value={fechaLanzamiento}
              onChange={setFechaLanzamiento}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="bg-stone-800 p-5 mt-5 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-10">
            Filtrar por plataforma/s
          </h1>
          <div className="flex flex-wrap justify-center">
            {providers.map((provider) => (
              <CheckboxPlatforma
                key={provider.id}
                name={provider.provider_name}
                value={provider.provider_id}
                imagen={provider.logo_path}
                checked={checkedItemsProvider[provider.provider_name]}
                onChange={handleCheckedboxProviderChange}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className=" mt-5 text-2xl bg-yellow-500 p-2 rounded-xl text-stone-950 mb-10 disabled:bg-yellow-200 disabled:cursor-not-allowed"
          onClick={handleClick}
          disabled={tipo === ""}
        >
          Filtrar películas
        </button>
      </div>
    </div>
  );
}
