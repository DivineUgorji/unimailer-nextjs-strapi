"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";

export function Search() {
  // Get access to URL search parameters, routing, and current pathname
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // Track focus state for animated styles
  const [isFocused, setIsFocused] = useState(false);

  // Track input value to control the clear button visibility
  const [value, setValue] = useState(
    searchParams.get("query")?.toString() ?? "",
  );

  // Create a debounced search handler that only triggers 300ms after the user stops typing
  const handleSearch = useDebouncedCallback((term: string) => {
    // Create a new URLSearchParams instance with current params
    const params = new URLSearchParams(searchParams);
    // Reset to first page whenever search term changes
    params.set("page", "1");

    // Update URL search parameters based on search term
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    // Update the URL without triggering a page refresh
    // scroll: false prevents the page from jumping to top
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  // Clear input and remove query from URL
  const handleClear = () => {
    setValue("");
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative w-full max-w-md mt-1">
      {/* ── Focus glow ring ── */}
      <div
        className={`absolute -inset-0.5 rounded-lg blur-md pointer-events-none
                    bg-orange-500/20 transition-opacity duration-300
                    ${isFocused ? "opacity-100" : "opacity-0"}`}
      />

      {/* ── Input wrapper — pill container holds icon, input, clear, button ── */}
      <div
        className={`relative flex items-center gap-2 p-1.5 rounded-lg border
                    bg-white transition-all duration-300
                    ${
                      isFocused
                        ? "border-orange-500/60 shadow-[0_4px_20px_rgba(238,96,52,0.12)]"
                        : "border-neutral-200 shadow-[0_2px_8px_rgba(53,50,62,0.06)]"
                    }`}
      >
        {/* Input */}
        <input
          type="text"
          // Placeholder always visible before focus
          placeholder="Search articles..."
          // Controlled value — ensures input clears when handleClear is called
          value={value}
          // Call handleSearch whenever input value changes
          onChange={(e) => {
            setValue(e.target.value);
            handleSearch(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 py-2 pl-2 text-sm text-neutral-800 bg-transparent
                     outline-none placeholder:text-neutral-800/50
                     font-mono tracking-wide min-w-0"
          aria-label="Search articles"
        />
        {/* // Clear button — only visible when there's a value */}
        {value && (
          <button
            onClick={handleClear}
            className="shrink-0 flex items-center justify-center
                       w-6 h-6 rounded-md bg-neutral-100
                       hover:bg-neutral-200 border border-neutral-200
                       transition-all duration-200 group"
            aria-label="Clear search"
          >
            <X
              className="w-2.5 h-2.5 text-neutral-400
                         group-hover:text-neutral-600
                         transition-colors duration-200"
              strokeWidth={2.5}
            />
          </button>
        )}
        {/* Search button
             On small screens: icon only (compact square)
             On md+: icon + "Search" text label
             Transition is smooth as the text fades and width adjusts */}
        <button
          onClick={() => handleSearch(value)}
          className="group shrink-0 flex items-center justify-center
                     gap-0 md:gap-2
                     w-8 md:w-auto
                     px-0 md:px-4 py-2
                     rounded-md bg-orange-500 hover:bg-orange-400
                     text-white font-mono text-[0.7rem] font-medium
                     tracking-widest uppercase whitespace-nowrap
                     transition-all duration-300
                     hover:shadow-[0_0_16px_rgba(238,96,52,0.4)]
                     active:scale-[0.98]"
          aria-label="Submit search"
        >
          {/* Text label — hidden on small screens, visible on md+ */}
          <span className="hidden md:inline">Search</span>

          {/* Icon — always visible, slides slightly on hover */}
          <SearchIcon
            className="w-3.5 h-3.5 shrink-0 transition-transform duration-200
                       group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </button>
      </div>

      {/* ── Active query hint — shows what's being searched ── */}
      {value && (
        <div className="flex items-center gap-1.5 mt-2 pl-1">
          <span className="w-1 h-1 rounded-full bg-orange-500/50" />
          <span
            className="font-mono text-[0.6rem] tracking-wide
                           text-neutral-800/40"
          >
            Results for{" "}
            <span className="text-orange-500 font-semibold">{value}</span>
          </span>
        </div>
      )}
    </div>
  );
}
