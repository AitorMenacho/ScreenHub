import Checkbox from "@/components/recomendador/Checkbox";
import SliderFecha from "@/components/recomendador/SliderFecha";
import { useState } from "react";
import Providers from "../api/Providers";
import CheckboxPlatforma from "@/components/recomendador/CheckboxPlataformas";
import Link from "next/link";
import { useRouter } from "next/router";

const MIN_FECHA_LANZAMIENTO = 1970;
const MAX_FECHA_LANZAMIENTO = new Date().getFullYear();

export default function Opciones() {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItemsProvider, setCheckedItemsProvider] = useState({});
  const [checkedItemsValoracion, setCheckedItemsValoracion] = useState({});
  const [checkedItemsTipo, setCheckedItemsTipo] = useState({});
  const [valoracion, setValoracion] = useState({});
  const [tipo, setTipo] = useState({});
  const [generos, setGeneros] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [fechaLanzamiento, setFechaLanzamiento] = useState([
    MIN_FECHA_LANZAMIENTO,
    MAX_FECHA_LANZAMIENTO,
  ]);

  const { providers } = Providers();
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

      <div className="grid grid-cols-2">
        <div className="bg-stone-800 p-5 mt-5 mr-5 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-10">
            Filtra por género/s
          </h1>
          <div className="flex flex-wrap justify-center">
            <Checkbox
              name="accion"
              label="Acción"
              value={"28"}
              checked={checkedItems["accion"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="animacion"
              label="Animación"
              value={"16"}
              checked={checkedItems["animacion"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="aventura"
              label="Aventura"
              value={"12"}
              checked={checkedItems["aventura"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="belico"
              label="Bélico"
              value={"10752"}
              checked={checkedItems["belico"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="ciencia ficcion"
              label="Ciencia ficción"
              value={"878"}
              checked={checkedItems["ciencia ficcion"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="comedia"
              label="Comedia"
              value={"35"}
              checked={checkedItems["comedia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="crimen"
              label="Crímen"
              value={"80"}
              checked={checkedItems["crimen"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="documental"
              label="Documental"
              value={"99"}
              checked={checkedItems["documental"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="drama"
              label="Drama"
              value={"18"}
              checked={checkedItems["drama"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="familia"
              label="Familia"
              value={"10751"}
              checked={checkedItems["familia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="fantasia"
              label="Fantasía"
              value={"14"}
              checked={checkedItems["fantasia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="historia"
              label="Historia"
              value={"36"}
              checked={checkedItems["historia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="misterio"
              label="Misterio"
              value={"9648"}
              checked={checkedItems["misterio"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="musica"
              label="Música"
              value={"10402"}
              checked={checkedItems["musica"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="romance"
              label="Romance"
              value={"10749"}
              checked={checkedItems["romance"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="suspense"
              label="Suspense"
              value={"53"}
              checked={checkedItems["suspense"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="terror"
              label="Terror"
              value={"27"}
              checked={checkedItems["terror"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="thriller"
              label="Thriller"
              value={"53"}
              checked={checkedItems["thriller"]}
              onChange={handleCheckedboxChange}
            />
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
      <div className="grid grid-cols-2">
        <div className="bg-stone-800 p-5 mt-5 mr-5 rounded-xl">
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
        <div className="bg-stone-800 p-5 mt-5 ml-5 rounded-xl">
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
      </div>
      <div className="flex justify-center">
        <button className=" p-5 mt-5" onClick={handleClick}>
          <p className="text-2xl bg-yellow-500 p-2 rounded-xl text-stone-950 text-center mb-10">
            Filtrar películas
          </p>
        </button>
      </div>
    </div>
  );
}
