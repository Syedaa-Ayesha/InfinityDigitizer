const Instruction = ({pholder}) => {
  return (
    <>
    <textarea name="instruction" 
    id="Instruction" 
    placeholder={pholder}
    className="h-[96px] w-[510px] border border-[#E7E4F3] resize-none"  ></textarea>
    </>
  )
}

export default Instruction