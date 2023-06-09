export default function Checkbox({ name, label, checked, onChange, value }) {
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
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <span className="text-stone-950">{label}</span>
    </label>
  );
}
