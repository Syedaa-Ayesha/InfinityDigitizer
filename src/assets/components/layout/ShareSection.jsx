import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link2 } from "lucide-react";

const ShareSection = ({ blog }) => {
  if (!blog) return null;

  const pageUrl = window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      alert("Link copied successfully.");
    } catch {
      alert("Unable to copy link.");
    }
  };

  const shareItems = [
    {
      id: 1,
      label: "Facebook",
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageUrl
      )}`,
    },
    {
      id: 2,
      label: "Twitter",
      icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        pageUrl
      )}&text=${encodeURIComponent(blog.title)}`,
    },
    {
      id: 3,
      label: "LinkedIn",
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        pageUrl
      )}`,
    },
  ];

  return (
    <section
      className="
        my-4
        rounded-[20px]
        border
        border-[#ECECF3]
        bg-white
        p-5
        shadow-sm

        md:px-8
        md:py-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5

          lg:flex-row
          lg:items-center
        "
      >
        {/* Heading */}

        <h4
          className="
            shrink-0
            font-dmSans
            text-[15px]
            font-semibold
            text-[#424957]
          "
        >
          Share this article:
        </h4>

        {/* Buttons */}

        <div className="flex flex-wrap gap-3">

          {shareItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#E5E7EB]
                  bg-white
                  px-5
                  py-3
                  text-[14px]
                  font-medium
                  text-[#424957]
                  transition-all
                  duration-300

                  hover:border-[#7434E5]
                  hover:bg-[#7434E5]
                  hover:text-white
                "
              >
                <Icon size={15} />

                <span>{item.label}</span>
              </a>
            );
          })}

          <button
            onClick={handleCopy}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E5E7EB]
              bg-white
              px-5
              py-3
              text-[14px]
              font-medium
              text-[#424957]
              transition-all
              duration-300

              hover:border-[#7434E5]
              hover:bg-[#7434E5]
              hover:text-white
            "
          >
            <Link2 size={15} />

            <span>Copy Link</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ShareSection;