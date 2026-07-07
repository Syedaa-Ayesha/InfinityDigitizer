import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import AccordionData from "../common/AccordionData";

const Accordion = () => {
  return (
    <div className="mx-auto mt-9 w-193.75 max-w-225">

      {AccordionData.map((item) => (
        <Disclosure key={item.id}>
          {({ open }) => (
            <div className="border-b border-[#D4D4E0]">

              {/* Question */}

              <Disclosure.Button
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-6
                  text-left
                "
              >
                <h3
                  className="
                    text-[16px]
                    font-semibold
                    font-dmSans
                    leading-7
                    text-[#111118]
                  "
                >
                  {item.question}
                </h3>

                <ChevronDown
                  size={22}
                  strokeWidth={2}
                  className={`
                    transition-all
                    duration-300
                    ${open ? "rotate-180" : ""}
                  `}
                />
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
                    pb-6
                    pr-14
                    text-[16px]
                    leading-8
                    font-inter
                    text-[#6B6B80]
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