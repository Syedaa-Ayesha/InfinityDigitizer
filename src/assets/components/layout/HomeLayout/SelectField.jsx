import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const SelectField = ({
  value,
  onChange,
  placeholder,
  options = [],
  name,
  id,
  required = false,
  disabled = false,
  error = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* ================= CLOSE OUTSIDE ================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* ================= SELECT ================= */

  const handleSelect = (option) => {
    onChange?.({
      target: {
        name,
        value: option,
      },
    });

    setIsOpen(false);
  };

  const selectedLabel = value || placeholder;

  return (
    <div
      ref={dropdownRef}
      className="relative w-full"
    >
      {/* Hidden native input for form support */}
      <input
        type="hidden"
        name={name}
        value={value || ""}
        required={required}
      />

      {/* ================= SELECT BUTTON ================= */}

      <button
        type="button"
        id={id || name}
        disabled={disabled}
        onClick={() =>
          !disabled && setIsOpen((prev) => !prev)
        }
        className={`
          flex
          h-[50px]
          w-full
          items-center
          justify-between
          rounded-[7px]
          border
          bg-white
          px-[14px]
          
          font-inter
          text-left
          text-[14px]
          outline-none
          transition-all
          duration-200

          ${
            error
              ? "border-red-500"
              : isOpen
              ? "border-[#7434E5] ring-1 ring-[#7434E5]/10"
              : "border-[#E7E3ED]"
          }

          ${
            value
              ? "text-[#757575]"
              : "text-[#757575]"
          }

          hover:border-[#CDB9F5]

          disabled:cursor-not-allowed
          disabled:bg-[#F7F7F7]
          disabled:opacity-60

          ${className}
        `}
      >
      <span className="     placeholder:text-[#757575]
placeholder:font-normal">
  {selectedLabel}
</span>

        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={`
            shrink-0
            text-[#757575]
            transition-transform
            duration-200
            ${isOpen ? "rotate-180 text-[#7434E5]" : ""}
          `}
        />
      </button>

      {/* ================= DROPDOWN ================= */}

      {isOpen && !disabled && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[calc(100%+5px)]
            z-50
            max-h-[220px]
            overflow-y-auto
            rounded-[8px]
            border
            border-[#E7E3ED]
            bg-white
            p-1
            shadow-[0_8px_25px_rgba(116,52,229,0.12)]
          "
        >
          {options.map((option) => {
            const isSelected = value === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`
                  flex
                  min-h-[38px]
                  w-full
                  items-center
                  rounded-[6px]
                  px-3
                  text-left
                  font-inter
                  text-[13px]
                  transition-all
                  duration-150

                  ${
                    isSelected
                      ? "bg-[#F3EDFF] text-[#7434E5]"
                      : "bg-white text-[#757575]"
                  }

                  hover:bg-[#F3EDFF]
                  hover:text-[#7434E5]
                `}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {/* ================= ERROR ================= */}

      {error && (
        <p className="mt-1 text-[10px] text-red-500">
          {typeof error === "string"
            ? error
            : "Please select an option"}
        </p>
      )}
    </div>
  );
};

export default SelectField;