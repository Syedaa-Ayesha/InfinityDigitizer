import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HelpTopicCard = ({
  icon: Icon,
  title,
  description,
  link,
}) => {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-[150px]
        w-full
        max-w-full
        min-w-0
        flex-col

        overflow-hidden
        rounded-[14px]
        border
        border-[#E8E5EF]
        bg-white

        px-[14px]
        py-[15px]

        shadow-[0_3px_16px_rgba(54,36,88,0.045)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-[3px]
        hover:border-[#D9CAF5]
        hover:shadow-[0_12px_28px_rgba(116,52,229,0.10)]

        sm:min-h-[155px]
        sm:px-[16px]
        sm:py-[16px]

        lg:min-h-[165px]
        lg:px-[16px]
        lg:py-[17px]
      "
    >
      {/* ================= ICON ================= */}
      <Link
        to={link}
        aria-label={`Open ${title}`}
        className="
          flex
          h-[38px]
          w-[38px]
          shrink-0
          items-center
          justify-center

          rounded-full
          bg-[#F1EAFF]

          transition-all
          duration-300

          hover:bg-[#7434E5]

          sm:h-[40px]
          sm:w-[40px]

          lg:h-[42px]
          lg:w-[42px]
        "
      >
        {Icon && (
          <Icon
            size={18}
            strokeWidth={1.7}
            className="
              text-[#7434E5]
              transition-colors
              duration-300

              group-hover:text-white
            "
          />
        )}
      </Link>

      {/* ================= CONTENT ================= */}
      <div className="mt-[11px] min-w-0 flex flex-1 flex-col">
        <Link
          to={link}
          className="
            block
            min-w-0
            max-w-full
            break-words

            font-dmSans
            text-[15px]
            font-bold
            leading-[1.3]
            tracking-[-0.1px]
            text-[#17161F]

            transition-colors
            duration-200

            hover:text-[#7434E5]

            sm:text-[16px]

            lg:text-[16px]
          "
        >
          {title}
        </Link>

        <p
          className="
            mt-[7px]
            min-w-0
            max-w-full
            break-words

            font-inter
            text-[13px]
            font-normal
            leading-[1.6]
            text-[#6B6B80]

            sm:text-[14px]
            sm:leading-[1.65]

            lg:text-[14px]
            lg:leading-[1.7]
          "
        >
          {description}
        </p>
      </div>

      {/* ================= ARROW ================= */}
      <Link
        to={link}
        aria-label={`View ${title}`}
        className="
          mt-[11px]
          flex
          h-[27px]
          w-[27px]
          shrink-0
          items-center
          justify-center

          self-start

          rounded-full
          border
          border-[#E8E3F0]
          bg-white

          transition-all
          duration-300

          hover:border-[#7434E5]
          hover:bg-[#7434E5]

          sm:h-[29px]
          sm:w-[29px]

          lg:h-[30px]
          lg:w-[30px]
        "
      >
        <ArrowRight
          size={14}
          strokeWidth={1.8}
          className="
            text-[#7434E5]

            transition-all
            duration-300

            group-hover:translate-x-[1px]
            group-hover:text-white
          "
        />
      </Link>
    </article>
  );
};

export default HelpTopicCard;