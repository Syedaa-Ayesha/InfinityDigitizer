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
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageUrl
      )}`,
      label: "Facebook",
    },

    {
      id: 2,
      icon: FaLinkedinIn,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        pageUrl
      )}&text=${encodeURIComponent(blog.title)}`,
      label: "Twitter",
    },

    {
      id: 3,
      icon: FaXTwitter,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        pageUrl
      )}`,
      label: "LinkedIn",
    },
  ];

  return (
    <section
      className="
      mb-2
        rounded-[24px]
        border
        border-[#ECECF3]
        bg-white
        p-6
        shadow-sm
        md:p-8
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Left */}

        <div>

          <h3
            className="
              font-dmSans
              text-[28px]
              font-bold
              text-[#0F1729]
            "
          >
            Share this article
          </h3>

          <p className="mt-2 text-[#6B7280]">
            Help others discover this article.
          </p>

        </div>

        {/* Right */}

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
                  hover:border-[#7434E5]
                  hover:bg-[#7434E5]
                  hover:text-white
                "
              >
                <Icon size={18} />
              </a>
            );
          })}

          <button
            onClick={handleCopy}
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
              hover:border-[#7434E5]
              hover:bg-[#7434E5]
              hover:text-white
            "
          >
            <Link2 size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ShareSection;