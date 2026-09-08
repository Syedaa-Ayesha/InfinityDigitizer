import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter(Boolean);

  // URL slug ko readable name mein convert karega
  const formatName = (segment) => {
    return segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="
        mx-auto
        flex
        w-full
        max-w-[1330px]
        items-center
        gap-1.5
        overflow-x-auto
        px-4
        py-4
        font-inter
        text-xs
        sm:gap-2
        sm:px-6
        sm:py-5
        sm:text-sm
        lg:px-8
        xl:px-0
      "
    >
      {/* Home */}
      <Link
        to="/"
        className={`
          flex
          shrink-0
          items-center
          gap-1.5
          whitespace-nowrap
          transition-colors
          ${
            pathSegments.length === 0
              ? "font-semibold text-[#7434E5]"
              : "text-[#9494A8] hover:text-[#7434E5]"
          }
        `}
      >
        <Home
          size={15}
          strokeWidth={1.8}
          className="sm:h-4 sm:w-4"
        />

        <span>Home</span>
      </Link>

      {/* Dynamic Pages */}
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;

        const path =
          "/" +
          pathSegments
            .slice(0, index + 1)
            .join("/");

        return (
          <div
            key={path}
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              sm:gap-2
            "
          >
            <ChevronRight
              size={14}
              strokeWidth={1.8}
              className="shrink-0 text-[#B8B8C5] sm:h-[15px] sm:w-[15px]"
            />

            {isLast ? (
              <span
                className="
                  whitespace-nowrap
                  font-semibold
                  capitalize
                  text-[#7434E5]
                "
              >
                {formatName(segment)}
              </span>
            ) : (
              <Link
                to={path}
                className="
                  whitespace-nowrap
                  text-[#9494A8]
                  transition-colors
                  hover:text-[#7434E5]
                "
              >
                {formatName(segment)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

