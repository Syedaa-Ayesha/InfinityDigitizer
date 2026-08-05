const TextArea = ({
  placeholder,
  value,
  onChange,
  icon:Icon,
  error,
  name,
  id,
  rows = 6,
  className = "",
}) => {
  return (
    <div className="w-full">

      {/* Label */}

      {/* {label && (
        <label
          htmlFor={id || name}
          className="
            mb-2
            block
            font-dmSans
            text-sm
            font-bold
            text-[#0F1729]
          "
        >
          {label}
        </label>
      )} */}

      {/* TextArea */}

     {/* TextArea */}

<div className="relative">
  {/* Left Icon */}

 {Icon && (
  <Icon
    size={18}
    className="
      absolute
      left-4
      top-4
      text-[#ACB0B9]
      pointer-events-none
    "
  />
)}

  <textarea
    id={id || name}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  
    rows={rows}
    className={`
      w-full
      rounded-[10px]
      border-2
      border-[#E7E3ED]
      bg-white

      py-[14px]
      ${Icon ? "pl-12" : "pl-4"}
      pr-4

      text-[15px]
      text-[#0F1729]

      placeholder:text-[#ACB0B9]

      outline-none
      resize-none

      transition-all
      duration-300

      ${
        error
          ? "border-red-500"
          : "border-[#E7E3ED]"
      }

      focus:border-[#7434E5]

      ${className}
    `}
  />
</div>

      {/* Error */}

      {error && (
        <p
          className="
            mt-2
            text-[13px]
            text-red-500
          "
        >
          {error}
        </p>
      )}

    </div>
  );
};

export default TextArea;