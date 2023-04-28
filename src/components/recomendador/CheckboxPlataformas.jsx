import Image from "next/image";

export default function CheckboxPlatforma({
  name,
  imagen,
  checked,
  onChange,
  value,
}) {
  return (
    <label
      htmlFor={name}
      className={`rounded-lg px-4 py-2 m-1 cursor-pointer hover:bg-yellow-500 ${
        checked ? "bg-yellow-500" : "bg-gray-300"
      }`}
    >
      <input
        id={name}
        name={name}
        value={value}
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <Image
        src={`https://image.tmdb.org/t/p/w500${imagen}`}
        alt={name}
        width={50}
        height={50}
        className="inline-block"
      />
    </label>
  );
}
