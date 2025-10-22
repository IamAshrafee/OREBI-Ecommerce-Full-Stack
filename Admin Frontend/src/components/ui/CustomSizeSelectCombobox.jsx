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
import sizeData from "../../data/sizes";

export default function CustomSizeSelectCombobox() {
  const [query, setQuery] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
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

  const filteredSizes =
    query === ""
      ? sizeData
      : sizeData.filter((size) =>
          size.sizeName.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelectionChange = (sizes) => {
    setSelectedSizes(sizes);
    setQuery("");
    inputRef.current?.focus();
  };

  const removeSize = (sizeToRemove, e) => {
    e.stopPropagation();
    setSelectedSizes((prev) =>
      prev.filter((size) => size.sizeLetter !== sizeToRemove.sizeLetter)
    );
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Backspace" && query === "" && selectedSizes.length > 0) {
      // Remove the last size when backspace is pressed with empty query
      setSelectedSizes((prev) => prev.slice(0, -1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const SelectedSizeChip = ({ size }) => (
    <div className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-sm">
      <span className="text-gray-700 dark:text-gray-200">
        {size.sizeLetter}
      </span>
      <span className="text-gray-500 dark:text-gray-400 text-xs">
        ({size.sizeName})
      </span>
      <button
        type="button"
        onClick={(e) => removeSize(size, e)}
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
      value={selectedSizes}
      onChange={handleSelectionChange}
      onClose={() => setIsOpen(false)}
      multiple
    >
      <Label className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        Select sizes
      </Label>
      <div className="relative mt-2">
        <div
          className="flex flex-wrap items-center gap-2 w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500 min-h-[42px] cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {selectedSizes.map((size) => (
            <SelectedSizeChip key={size.sizeLetter} size={size} />
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
            placeholder={
              selectedSizes.length === 0 ? "Type to search sizes..." : ""
            }
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
            {filteredSizes.length === 0 ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700 dark:text-gray-300">
                No sizes found.
              </div>
            ) : (
              filteredSizes.map((size) => (
                <ComboboxOption
                  key={size.sizeLetter}
                  value={size}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-9 ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "text-gray-900 dark:text-white"
                    }`
                  }
                >
                  {({ selected }) => (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="font-medium w-8 text-gray-900 dark:text-white">
                          {size.sizeLetter}
                        </span>
                        <span
                          className={`block truncate ml-3 ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {size.sizeName}
                        </span>
                      </div>
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
