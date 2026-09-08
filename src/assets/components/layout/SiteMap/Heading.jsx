

const Heading = ({ title, icon : Icon }) => {
  return (
  <div className="flex gap-4 mb-2">
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#EDE7F9]">
               <Icon size={24}/> 
            </div>
            <p className="text-[24px] font-dmSans text-[#111118] font-bold">
{title}
</p>
        </div>
  )
}

export default Heading