const TextArea = (placeholder) => {
  return (
    <textarea
          id="embroidery-instructions"
          name="instructions"
          placeholder={placeholder}
          className="
            h-10
           
            w-full
            resize-none
            rounded-[7px]
            border
            border-[#E7E3ED]
            bg-white
            p-2.5
            font-inter
            text-sm
            leading-4
            text-[#757575]
            outline-none
            transition-all
            duration-200
            placeholder:text-[#ACB0B9]
            placeholer:text-sm
            focus:border-[#7434E5]
            focus:ring-1
            focus:ring-[#7434E5]/10
          "
        />
  )
}

export default TextArea