import { useState } from "react";
import MapView from "./components/MapView";
import SearchBar from "./components/SearchBar";
import ZoneList from "./components/ZoneList";
import { CATEGORY_INFO, type Category, type Item } from "./data/silksong";
import "./App.css";

type View = "mapa" | "lista";

const ALL_CATEGORIES = Object.keys(CATEGORY_INFO) as Category[];

export default function App() {
  const [view, setView] = useState<View>("mapa");
  const [selected, setSelected] = useState<Item | null>(null);
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState<Set<Category>>(
    () => new Set(ALL_CATEGORIES)
  );

  const allVisible = visible.size === ALL_CATEGORIES.length;

  function toggleCategory(cat: Category) {
    setVisible((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }

  function showAll() {
    setVisible(new Set(ALL_CATEGORIES));
  }

  const handlePick = (item: Item) => {
    setSelected(item);
    setView("mapa");
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Mapa de Pharloom</h1>
        <p className="subtitle">
          La guía real de Hollow Knight: Silksong. Busca algo y el mapa volará
          hasta donde está.
        </p>
        <div className="legend">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="checkbox"
              aria-checked={visible.has(cat)}
              className={`legend-chip ${visible.has(cat) ? "legend-chip-active" : "legend-chip-inactive"}`}
              style={{ borderColor: CATEGORY_INFO[cat].color }}
              onClick={() => toggleCategory(cat)}
            >
              <span
                className={`legend-check ${visible.has(cat) ? "legend-check-on" : ""}`}
                style={visible.has(cat) ? { background: CATEGORY_INFO[cat].color } : undefined}
              >
                {visible.has(cat) && (
                  <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                    <path
                      d="M2 6.5 4.8 9 10 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span
                className="legend-dot"
                style={{ background: CATEGORY_INFO[cat].color }}
              >
                {CATEGORY_INFO[cat].icon}
              </span>
              {CATEGORY_INFO[cat].label}
            </button>
          ))}
          <button
            type="button"
            className={`legend-chip legend-chip-all ${allVisible ? "legend-chip-active" : ""}`}
            onClick={showAll}
          >
            Todas
          </button>
          <button
            type="button"
            className={`legend-chip legend-chip-all ${visible.size === 0 ? "legend-chip-active" : ""}`}
            onClick={() => setVisible(new Set())}
          >
            Ninguna
          </button>
        </div>
      </header>

      <SearchBar query={query} setQuery={setQuery} onPick={handlePick} />

      <nav className="view-tabs">
        <button
          type="button"
          className={`view-tab ${view === "mapa" ? "view-tab-active" : ""}`}
          onClick={() => setView("mapa")}
        >
          Mapa
        </button>
        <button
          type="button"
          className={`view-tab ${view === "lista" ? "view-tab-active" : ""}`}
          onClick={() => setView("lista")}
        >
          Lista de Zonas
        </button>
      </nav>

      <main className="content">
        {view === "mapa" ? (
          <MapView selected={selected} onSelect={handlePick} visible={visible} />
        ) : (
          <ZoneList selectedId={selected?.id ?? null} onSelect={handlePick} />
        )}
      </main>

      <footer className="footer">
        <p>
          Tip: arrastra para moverte y usa + / − para acercar. Toca un marcador
          para ver sus detalles. Los montones de puntos se abren al hacer zoom.
        </p>
      </footer>
    </div>
  );
}
