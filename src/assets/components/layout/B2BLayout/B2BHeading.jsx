

const B2BHeading = ({title}) => {
  return (
      <div className="mb-14 text-center">
          <h2
            className="
              text-[24px]
              font-extrabold
              font-dmSans
              text-[#111827]
              md:text-[32px]
              lg:text-[42px]
            "
          >
            {title}
          </h2>

          <div className="mx-auto mt-[11px] h-[3px] w-[64px] rounded-full bg-[#7434E5]" />
        </div>
  )
}

export default B2BHeading