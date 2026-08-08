

const SolidButton = ({title, Icon, classname}) => {
  return (
     <button
        className={`
          group
          flex
         py-[14px]
         px-6
         text-sm
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[linear-gradient(94.72deg,_#6C29E0_0%,_#5413C3_100%)]
          text-white
          font-semibold
          cursor-pointer
          transition-all
          duration-300
          hover:shadow-xl
          hover:scale-[1.01]
          lg:px-
          ${classname}
        `}
      >
        {title}

        <Icon
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />

      </button>
  )
}

export default SolidButton