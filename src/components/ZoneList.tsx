import { CATEGORY_INFO, getItemsInZone, ZONES, type Item } from "../data/silksong";

interface ZoneListProps {
  onSelect: (item: Item) => void;
  selectedId: string | null;
}

export default function ZoneList({ onSelect, selectedId }: ZoneListProps) {
  return (
    <div className="zone-list">
      {ZONES.map((zone) => {
        const items = getItemsInZone(zone.id);
        return (
          <details key={zone.id} className="zone-card">
            <summary style={{ borderColor: zone.color }}>
              <span
                className="zone-swatch"
                style={{ background: zone.color }}
              />
              <span className="zone-card-name">{zone.name}</span>
              <span className="zone-card-count">{items.length} cosas</span>
            </summary>
            <ul className="zone-items">
              {items.map((item) => {
                const cat = CATEGORY_INFO[item.category];
                const isSel = selectedId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`zone-item ${isSel ? "zone-item-selected" : ""}`}
                      onClick={() => onSelect(item)}
                    >
                      <span
                        className="zone-item-icon"
                        style={{
                          background: cat.color,
                          borderColor: cat.color,
                        }}
                      >
                        {cat.icon}
                      </span>
                      <span className="zone-item-body">
                        <strong>{item.name}</strong>
                        <small>{cat.label}</small>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </details>
        );
      })}
    </div>
  );
}
