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
        mb-2
        rounded-[30px]
        border
        border-[#ECECF3]
        bg-white
        p-6
        shadow-sm

        md:p-10
        border-black
      "
    >
      <div
        className="
          flex
          flex-col
          gap-8

          md:flex-row
          md:items-center
        "
      >

        {/* Author Image */}

        <img
          src={image}
          alt={name}
          className="
            h-36
            w-36
            rounded-full
            object-cover
            border-4
            border-[#F3EEFF]
            mx-auto

            md:mx-0
          "
        />

        {/* Content */}

        <div className="flex-1 text-center md:text-left">

          <span
            className="
              inline-flex
              rounded-full
              bg-[#F3EEFF]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              text-[#7434E5]
            "
          >
            Article Author
          </span>

          <h2
            className="
              mt-5
              font-dmSans
              text-[34px]
              font-bold
              text-[#0F1729]
            "
          >
            {name}
          </h2>

          <p
            className="
              mt-2
              text-[18px]
              font-medium
              text-[#7434E5]
            "
          >
            {role}
          </p>

          <p
            className="
              mt-6
              max-w-[760px]
              text-[17px]
              leading-8
              text-[#5A6475]
            "
          >
            {bio}
          </p>

          {/* Social */}

          <div
            className="
              mt-8
              flex
              justify-center
              gap-4

              md:justify-start
            "
          >

            <a
              href={social.facebook}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#ECECF3]
                transition-all
                duration-300
                hover:bg-[#7434E5]
                hover:text-white
              "
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={social.linkedin}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#ECECF3]
                transition-all
                duration-300
                hover:bg-[#7434E5]
                hover:text-white
              "
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href={social.twitter}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#ECECF3]
                transition-all
                duration-300
                hover:bg-[#7434E5]
                hover:text-white"
              >
              <FaXTwitter size={20} />
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default AuthorCard