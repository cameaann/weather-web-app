import React, { useState } from "react";

const Select = ({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const getDisplayValue = () => {
    return options.find((option) => option.value === value)?.label || "";
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setShowOptions(false);
    setHighlightedIndex(-1);
  };

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const { key } = event;

  // Open dropdown
  if ((key === "Enter" || key === " ") && !showOptions) {
    event.preventDefault();
    setShowOptions(true);
    return;
  }

  // Select highlighted option
  if (key === "Enter" && showOptions && highlightedIndex >= 0) {
    event.preventDefault();
    handleSelect(options[highlightedIndex].value);
    return;
  }

  // Navigate down
  if (key === "ArrowDown") {
    event.preventDefault();
    setShowOptions(true);
    setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
    return;
  }

  // Navigate up
  if (key === "ArrowUp") {
    event.preventDefault();
    setShowOptions(true);
    setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
    return;
  }

  // Close dropdown
  if (key === "Escape") {
    event.preventDefault();
    setShowOptions(false);
    setHighlightedIndex(-1);
  }
};

  return (
    <div className="relative w-[10rem]">
      <div
        className="relative flex justify-between w-full border-none bg-neutral-600 p-3 rounded-lg focus:outline-none focus-visible:outline-none"
        onFocus={() => setShowOptions(true)}
        onBlur={() => setShowOptions(false)}
        onKeyDown={handleKeyDown}
		tabIndex={0}
        role="combobox"
        aria-expanded={showOptions}
        aria-haspopup="listbox"
      >
		<span className="text-neutral-0">{getDisplayValue()}</span>
      <svg
        className={`w-5 h-5 text-neutral-300 transition-transform ${
          showOptions ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
	  </div>
      {showOptions && (
        <ul className="absolute bg-neutral-800 rounded-2xl w-full text-left p-2">
          {options.map((option, index) => (
            <li
              className={`px-4 py-3 cursor-pointer transition-colors rounded-lg ${
                highlightedIndex === index
                  ? "bg-neutral-600"
                  : "hover:bg-neutral-600"
              } ${
                value === option.value ? "bg-neutral-600 font-semibold" : ""
              }`}
              key={index}
              onMouseEnter={() => setHighlightedIndex?.(index)}
              onMouseDown={() => handleSelect(option.value)}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option.value);
              }}
              aria-selected={value === option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Select;
