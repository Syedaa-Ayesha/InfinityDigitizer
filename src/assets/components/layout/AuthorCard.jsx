import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const AuthorCard = ({ blog }) => {
  if (!blog?.author) return null;

  const { name, role, bio, image, social } = blog.author;

  return (
    <section
      className="
        rounded-[28px]
        border
        border-[#ECECF3]
        bg-white
        px-5
        py-8
        shadow-sm

        sm:px-8
        lg:px-10
        lg:py-10
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6

          sm:flex-row
          sm:items-start
        "
      >
        {/* Author Image */}

        <div
          className="
            flex
            h-[72px]
            w-[72px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-[#F3EEFF]
          "
        >
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}

        <div className="flex-1">

          <h3
            className="
              font-dmSans
              text-[24px]
              font-bold
              text-[#0F1729]

              md:text-[36px]
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-1
              text-[17px]
              font-semibold
              text-[#7434E5]
            "
          >
            {role}
          </p>

          <p
            className="
              mt-3
              max-w-[900px]
              text-[15px]
              leading-8
              text-[#667085]

              md:text-[17px]
            "
          >
            {bio}
          </p>

          {/* Social */}

          <div className="mt-6 flex items-center gap-3">

            <a
              href={social.facebook}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#F3EEFF]
                text-[#7434E5]
                transition-all
                duration-300
                hover:bg-[#7434E5]
                hover:text-white
              "
            >
              <FaFacebookF size={15} />
            </a>

            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#F3EEFF]
                text-[#7434E5]
                transition-all
                duration-300
                hover:bg-[#7434E5]
                hover:text-white
              "
            >
              <FaXTwitter size={15} />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#F3EEFF]
                text-[#7434E5]
                transition-all
                duration-300
                hover:bg-[#7434E5]
                hover:text-white
              "
            >
              <FaLinkedinIn size={15} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AuthorCard;