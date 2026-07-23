

const SidebarHeading = ({sidebarHeading, Icon}) => {
  return (
    <>
       <div className="flex items-center gap-2">
       
          <Icon
            size={16}
            className="text-[#7434E5]"
          />

        <h3
          className="
          text-[16px]
          font-bold
          text-[#0F1729]
          font-dmSans
          "
        >
          {sidebarHeading}
        </h3>

      </div>
<div  className="h-1 w-9 bg-[#7434E5] rounded-full my-2" />
</>
  )
}

export default SidebarHeading