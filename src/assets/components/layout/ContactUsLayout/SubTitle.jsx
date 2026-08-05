

const SubTitle = ({title}) => {
  return (
        <div className="inline-block">
      <p
        className="
          text-base
          font-bold
          uppercase
          tracking-[1.6px]
          text-[#7434E5]
          lg:text-[10px]
        "
      >
        {title}
      </p>

      <div
        className="
          mt-[10px]
          h-1
          w-10
          rounded-full
          bg-[#7434E5]
        "
      />
    </div>
  )
}

export default SubTitle