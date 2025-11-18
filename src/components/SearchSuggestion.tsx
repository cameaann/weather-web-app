import { type LocationSuggestion } from "./LocationSearch";

type SearchSuggestionProps = {
  suggestions: LocationSuggestion[];
  setLocation: (location: LocationSuggestion) => void;
  highlightedIndex: number;
  setHighlightedIndex?: (index: number) => void;
};

const SearchSuggestion = ({
  suggestions,
  setLocation,
  highlightedIndex,
  setHighlightedIndex,
}: SearchSuggestionProps) => {
  const handleLocation = (suggestion: LocationSuggestion) => {
    setLocation(suggestion);
  };

  return (
    <ul className="dropdown-content absolute menu bg-base-100 rounded-box p-2 shadow-sm w-md z-1000">
      {suggestions.map((suggestion, index) => (
        <li
          className={`cursor-pointer ${
            highlightedIndex === index
              ? "bg-neutral-700 border-l-bg-neutral-600"
              : "hover:bg-neutral-700"
          }`}
          key={index}
          tabIndex={-1}
          onMouseEnter={() => setHighlightedIndex?.(index)}
          onMouseDown={()=> handleLocation(suggestion)}
        >
          <button
            type="button"
            className="flex text-left py-[1rem] px-[0.8rem] text-base w-full"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setHighlightedIndex?.(index);
              handleLocation(suggestion);
            }}
          >
            {suggestion.city}
            {suggestion.state && `, ${suggestion.state}`}
            {suggestion.country && `, ${suggestion.country}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchSuggestion;
