

const SolidButton = ({title, Icon, classname, type, onClick}) => {
  return (
     <button
     type={type}
     onClick={onClick}
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
          bg-[linear-gradient(94.72deg,#6C29E0_0%,#5413C3_100%)]
          text-white
          cursor-pointer
          font-semibold
          cursor-pointer
          transition-all
          duration-300
          hover:shadow-xl
          lg:px-8
          
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