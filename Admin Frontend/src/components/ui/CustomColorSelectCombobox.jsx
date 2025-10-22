import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react";
import colorData from "../../data/colors";

export default function CustomColorSelectCombobox() {
  const [query, setQuery] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const comboboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredColors =
    query === ""
      ? colorData
      : colorData.filter((color) =>
          color.colorName.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelectionChange = (colors) => {
    setSelectedColors(colors);
    setQuery("");
    inputRef.current?.focus();
  };

  const removeColor = (colorToRemove, e) => {
    e.stopPropagation();
    setSelectedColors((prev) =>
      prev.filter((color) => color.colorCode !== colorToRemove.colorCode)
    );
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Backspace" && query === "" && selectedColors.length > 0) {
      // Remove the last color when backspace is pressed with empty query
      setSelectedColors((prev) => prev.slice(0, -1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const SelectedColorChip = ({ color }) => (
    <div className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-sm">
      <div
        className="w-3 h-3 rounded-full border border-gray-300"
        style={{ backgroundColor: color.colorCode }}
      />
      <span className="text-gray-700 dark:text-gray-200">
        {color.colorName}
      </span>
      <button
        type="button"
        onClick={(e) => removeColor(color, e)}
        className="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-0.5"
      >
        <XMarkIcon className="w-3 h-3 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );

  return (
    <Combobox
      as="div"
      ref={comboboxRef}
      value={selectedColors}
      onChange={handleSelectionChange}
      onClose={() => setIsOpen(false)}
      multiple
    >
      <Label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Select colors
      </Label>
      <div className="relative mt-2">
        <div
          className="flex flex-wrap items-center gap-2 w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500 min-h-[42px] cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {selectedColors.map((color) => (
            <SelectedColorChip key={color.colorCode} color={color} />
          ))}
          <ComboboxInput
            ref={inputRef}
            className="flex-1 min-w-[120px] bg-transparent border-none outline-none py-1"
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
            }}
            onKeyDown={handleInputKeyDown}
            onClick={handleInputClick}
            onFocus={() => setIsOpen(true)}
            displayValue={() => query}
          />
        </div>

        <ComboboxButton
          className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDownIcon
            className={`size-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </ComboboxButton>

        {isOpen && (
          <ComboboxOptions
            static
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-800 dark:ring-white/10"
          >
            {filteredColors.length === 0 ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700 dark:text-gray-300">
                No colors found.
              </div>
            ) : (
              filteredColors.map((color) => (
                <ComboboxOption
                  key={color.colorCode}
                  value={color}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-9 ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "text-gray-900 dark:text-white"
                    }`
                  }
                >
                  {({ selected }) => (
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-3 border border-gray-300"
                        style={{ backgroundColor: color.colorCode }}
                      />
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {color.colorName}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                          <div className="w-1.5 h-1.5 bg-current rounded-full" />
                        </span>
                      )}
                    </div>
                  )}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
