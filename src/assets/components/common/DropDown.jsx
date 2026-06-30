import { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropDown = ({ items = [], placeholder = "Select Option" }) => {
  const [selected, setSelected] = useState(placeholder);

//   useEffect(() => {
//       setSelected(placeholder);
//   }, [placeholder]);

  return (
    <Menu as="div" className="relative w-full">
      <MenuButton className="flex w-full items-center justify-between rounded-xl border border-[#E7E4F3] bg-white px-4 py-3">
        <span>{selected}</span>
        <ChevronDownIcon className="h-5 w-5" />
      </MenuButton>

      <MenuItems className="absolute z-20 mt-2 w-full rounded-xl bg-white shadow-lg">
        {items.map((item) => (
          <MenuItem key={item}>
            {({ active }) => (
              <button
                type="button"
                onClick={() => setSelected(item)}
                className={`w-full px-4 py-3 text-left ${
                  active
                    ? "bg-[#F3EBFF] text-[#7434E5]"
                    : "text-gray-700"
                }`}
              >
                {item}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropDown;