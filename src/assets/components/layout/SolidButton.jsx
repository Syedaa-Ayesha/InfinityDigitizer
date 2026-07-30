

const SolidButton = ({title, Icon, classname}) => {
  return (
     <button
        type="submit"
        className={`
          group
          flex
        
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          bg-[linear-gradient(94.72deg,_#6C29E0_0%,_#5413C3_100%)]
          text-white
          font-semibold
          transition-all
          duration-300
          hover:shadow-xl
          hover:scale-[1.01]
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