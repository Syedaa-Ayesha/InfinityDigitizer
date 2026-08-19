import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FooterColumn = ({
  title,
  links = [],
}) => {
  return (
    <div
      className="
       max-w-[320px]
       mx-12
    md:mx-4

      "
    >
      {/* Heading */}

      <h3
        className="
        font-dmSans
        text-[20px]
        font-bold
        text-white
        "
      >
        {title}
      </h3>

      {/* Purple Line */}

      <div
        className="
        mt-3
        mb-7
        h-[3px]
        w-10
        rounded-full
        bg-[#7434E5]
        md:mx-0
        "
      />

      {/* Links */}

      <ul
        className="
        space-y-[14px]
        "
      >
        {links.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              leading-6
              text-[#9CA3AF]
              transition-all
              duration-300
              hover:text-white
            "
            >
              <ChevronRight
                size={15}
                className="
                shrink-0
                text-[#FFFFFF]/55
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              />

              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;