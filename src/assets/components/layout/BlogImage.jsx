const BlogImage = ({ image, caption }) => {
  return (
    <figure className="my-12">

      {/* Image */}

      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-[#ECECF3]
          bg-[#F8F8FA]
        "
      >
        <img
          src={image}
          alt={caption}
          className="
            h-[240px]
            w-full
            object-cover

            sm:h-[320px]

            md:h-[420px]

            lg:h-[500px]
          "
        />
      </div>

      {/* Caption */}

      {caption && (
        <figcaption
          className="
            mt-4
            text-center
            text-[13px]
            italic
            text-[#9CA3AF]
          "
        >
          {caption}
        </figcaption>
      )}

    </figure>
  );
};

export default BlogImage;