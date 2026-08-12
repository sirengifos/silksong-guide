import { CATEGORY_INFO, type Item } from "../data/silksong";
import { zoneName } from "../data/helpers";

interface DetailCardProps {
  item: Item;
  onClose: () => void;
}

export default function DetailCard({ item, onClose }: DetailCardProps) {
  const cat = CATEGORY_INFO[item.category];
  return (
    <aside className="detail-card" style={{ borderColor: cat.color }}>
      <button type="button" className="detail-close" onClick={onClose} aria-label="Cerrar">
        ×
      </button>
      <div
        className="detail-icon"
        style={{ background: cat.color }}
      >
        {cat.icon}
      </div>
      <h3 className="detail-title">{item.name}</h3>
      <span className="detail-category" style={{ color: cat.color }}>
        {cat.label}
      </span>
      <p className="detail-desc">{item.description}</p>
      <div className="detail-zone">
        <span className="detail-zone-label">¿Dónde está?</span>
        <span className="detail-zone-name">{zoneName(item.zoneId)}</span>
      </div>
    </aside>
  );
}
