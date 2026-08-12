import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORY_INFO, ITEMS, type Item } from "../data/silksong";
import { zoneName } from "../data/helpers";

interface SearchBarProps {
  onPick: (item: Item) => void;
  query: string;
  setQuery: (q: string) => void;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function SearchBar({ onPick, query, setQuery }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = normalize(query.trim());
    return ITEMS.filter((i) => {
      const hay = normalize(i.name);
      const aliases = (i.search || []).map(normalize);
      return hay.includes(q) || aliases.some((a) => a.includes(q));
    }).slice(0, 8);
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="search-box" ref={boxRef}>
      <input
        type="search"
        className="search-input"
        placeholder="Busca algo... ej: dash, bencilla, reina"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
      />
      {focused && results.length > 0 && (
        <ul className="search-results">
          {results.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="search-result"
                onClick={() => {
                  onPick(item);
                  setFocused(false);
                }}
              >
                <span
                  className="dot"
                  style={{ background: CATEGORY_INFO[item.category].color }}
                />
                <span className="sr-name">{item.name}</span>
                <span className="sr-zone">{zoneName(item.zoneId)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {query.trim() !== "" && results.length === 0 && focused && (
        <div className="search-empty">No encontré nada con ese nombre. ¡Intenta otra palabra!</div>
      )}
    </div>
  );
}
