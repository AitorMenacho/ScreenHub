import Checkbox from "@/components/recomendador/Checkbox";
import SliderFecha from "@/components/recomendador/SliderFecha";
import { useState } from "react";

const MIN_FECHA_LANZAMIENTO = 1970;
const MAX_FECHA_LANZAMIENTO = new Date().getFullYear();

export default function Opciones() {
  const [checkedItems, setCheckedItems] = useState({});
  const [adult, setAdult] = useState(false);
  const [fechaLanzamiento, setFechaLanzamiento] = useState([
    MIN_FECHA_LANZAMIENTO,
    MAX_FECHA_LANZAMIENTO,
  ]);

  const handleCheckedboxChange = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  };

  const handleCheckedboxChangeAdult = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  };

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
              checked={checkedItems["accion"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="animacion"
              label="Animación"
              checked={checkedItems["animacion"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="aventura"
              label="Aventura"
              checked={checkedItems["aventura"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="belico"
              label="Bélico"
              checked={checkedItems["belico"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="ciencia ficcion"
              label="Ciencia ficción"
              checked={checkedItems["ciencia ficcion"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="Comedia"
              label="comedia"
              checked={checkedItems["comedia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="crimen"
              label="Crímen"
              checked={checkedItems["crimen"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="documental"
              label="Documental"
              checked={checkedItems["documental"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="drama"
              label="Drama"
              checked={checkedItems["drama"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="familia"
              label="Familia"
              checked={checkedItems["familia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="fantasia"
              label="Fantasía"
              checked={checkedItems["fantasia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="historia"
              label="Historia"
              checked={checkedItems["historia"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="misterio"
              label="Misterio"
              checked={checkedItems["misterio"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="musica"
              label="Música"
              checked={checkedItems["musica"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="romance"
              label="Romance"
              checked={checkedItems["romance"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="suspenso"
              label="Suspenso"
              checked={checkedItems["suspenso"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="terror"
              label="Terror"
              checked={checkedItems["terror"]}
              onChange={handleCheckedboxChange}
            />
            <Checkbox
              name="thriller"
              label="Thriller"
              checked={checkedItems["thriller"]}
              onChange={handleCheckedboxChange}
            />
          </div>
        </div>
        <div className="bg-stone-800 p-5 mt-5 rounded-xl">
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
    </div>
  );
}
