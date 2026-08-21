import { Disclosure, Transition } from "@headlessui/react";

const Accordion = ({
  data = [],
  openIcon: OpenIcon,
  closeIcon: CloseIcon,
  width=""
  
}) => {
  return (
    <div className={`mx-auto  max-w-[900px] ${width}`}>

      {data.map((item, index) => (
        <Disclosure key={item.id}>
          {({ open }) => (
            <div className={` pb-5  ${index !== data.length - 1 ? "border-b border-[#D4D4E0]" : ""}`}>

              {/* Question */}

              <Disclosure.Button
                className="
               
                  flex
                  w-full
                  items-center
                  justify-between
                  py-4
                  lg:py-6

                  text-left
                "
              >
                <h3
                  className="
                    font-dmSans
                    text-[18px]
                    font-bold
                    leading-7
                    text-[#0C0C30]
                    pr-2
                  "
                >
                  {item.question}
                </h3>

                {/* Dynamic Icon */}

                {open ? (
                  <OpenIcon
                    size={32}
                    strokeWidth={1}
                    
                    className="shrink-0 text-[#7434E5]"
                  />
                ) : (
                  <CloseIcon
                    size={32}
                    strokeWidth={1}
                    className="shrink-0 text-[#7434E5]"
                  />
                )}
              </Disclosure.Button>

              {/* Answer */}

              <Transition
                enter="transition-all duration-300"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <Disclosure.Panel
                  className="
                  px-6
                  py-5
                  rounded-[16px]
                    lg:pb-6
                    lg:pr-14
                    font-inter
                    text-base
                    leading-7
                    bg-[#F7F5FA]
                    text-[#6B7280]
                  "
                >
                  {item.answer}
                </Disclosure.Panel>
              </Transition>

            </div>
          )}
        </Disclosure>
      ))}

    </div>
  );
};

export default Accordion;