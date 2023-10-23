function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-1 text-sm sm:text-xs bg-transparent border-b-2 border-textColor outline-none"
    >
      {options.map((opt, i) => (
        <option
          key={i}
          value={opt.value}
          className="text-left text-xs sm:text-xs"
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
