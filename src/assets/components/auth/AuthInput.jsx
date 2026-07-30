import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const AuthInput = ({
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
}) => {
      const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;


  return (
 <div className="w-full">

      {/* Label */}

      {label && (
        <label
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
      )}

      {/* Input */}

      <div className="relative">

        {/* Left Icon */}

        {Icon && (
          <Icon
            size={16}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[#ACB0B9]
            "
          />
        )}

        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
     p-[14px]
            w-full
            rounded-[10px]
            border-2
            border-[#E7E3ED]
            bg-white

            ${
              error
                ? "border-red-500"
                : "border-[#E7E3ED]"
            }

            ${
              Icon
                ? "pl-12"
                : "pl-4"
            }

            ${
              type === "password"
                ? "pr-12"
                : "pr-4"
            }

            text-[15px]
            text-[#0F1729]
            outline-none

            transition-all
            duration-300

            placeholder:text-[#ACB0B9]

        focus:border-[#7434E5]
            
            focus:ring-[#7434E5]/10
          `}
        />

        {/* Password Toggle */}

        {type === "password" && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#A8AFBC]
              transition-all
              hover:text-[#7434E5]
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
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

    </div>  )
}

export default AuthInput