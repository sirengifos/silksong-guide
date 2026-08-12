import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { CATEGORY_INFO, ITEMS, type Category, type Item } from "../data/silksong";
import { MAP_CONFIG } from "../lib/mapConfig";

interface MapViewProps {
  selected: Item | null;
  onSelect: (item: Item) => void;
  visible: Set<Category>;
}

const CATEGORIES = Object.keys(CATEGORY_INFO) as Category[];

export default function MapView({ selected, onSelect, visible }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const groupsRef = useRef<Record<Category, L.MarkerClusterGroup>>(
    {} as Record<Category, L.MarkerClusterGroup>
  );
  const markersRef = useRef<Record<string, L.Marker>>({});
  const selectedRef = useRef<Item | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const map = L.map(containerRef.current, {
      crs: L.CRS.Simple,
      center: MAP_CONFIG.initialCenter as L.LatLngTuple,
      zoom: MAP_CONFIG.initialZoom,
      minZoom: -1,
      maxZoom: MAP_CONFIG.maxZoom,
      maxBounds: L.latLngBounds(MAP_CONFIG.bounds as L.LatLngTuple[]),
      zoomControl: false,
      attributionControl: true,
      maxBoundsViscosity: 0.8,
    });
    mapRef.current = map;

    L.tileLayer(MAP_CONFIG.tileUrl, {
      tileSize: MAP_CONFIG.tileSize,
      zoomReverse: MAP_CONFIG.zoomReverse,
      maxZoom: MAP_CONFIG.serverMaxZoom,
      minZoom: 0,
      attribution: MAP_CONFIG.attribution,
      bounds: L.latLngBounds(MAP_CONFIG.bounds as L.LatLngTuple[]),
    }).addTo(map);

    const groups = {} as Record<Category, L.MarkerClusterGroup>;
    for (const cat of CATEGORIES) {
      const group = L.markerClusterGroup({
        showCoverageOnHover: false,
        maxClusterRadius: 46,
        spiderfyOnMaxZoom: true,
        chunkedLoading: true,
        iconCreateFunction: (cluster) =>
          L.divIcon({
            className: "pin-cluster",
            html: `<div class="pin-cluster-bubble">${cluster.getChildCount()}</div>`,
            iconSize: [40, 40],
          }),
      });
      groups[cat] = group;
    }
    groupsRef.current = groups;

    for (const item of ITEMS) {
      const marker = L.marker([item.x, item.y] as L.LatLngTuple, {
        icon: makePin(item.category),
        title: item.name,
        riseOnHover: true,
      });
      marker.on("click", () => onSelect(item));
      markersRef.current[item.id] = marker;
      groups[item.category].addLayer(marker);
    }

    for (const cat of CATEGORIES) {
      if (visible.has(cat)) map.addLayer(groups[cat]);
    }

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    for (const cat of CATEGORIES) {
      const group = groupsRef.current[cat];
      if (visible.has(cat)) {
        if (!map.hasLayer(group)) map.addLayer(group);
      } else {
        map.removeLayer(group);
      }
    }
  }, [visible]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const prev = selectedRef.current;
    if (prev && markersRef.current[prev.id]) {
      const el = markersRef.current[prev.id].getElement();
      el?.classList.remove("pin-selected");
    }

    if (selected && markersRef.current[selected.id]) {
      const marker = markersRef.current[selected.id];
      const el = marker.getElement();
      el?.classList.add("pin-selected");
      const group = groupsRef.current[selected.category];
      if (!map.hasLayer(group)) map.addLayer(group);
      map.flyTo([selected.x, selected.y] as L.LatLngTuple, 1, { duration: 1 });
    }

    selectedRef.current = selected;
  }, [selected]);

  function zoomBy(delta: number) {
    const map = mapRef.current;
    if (!map) return;
    const z = Math.round(map.getZoom() + delta);
    map.setZoom(Math.max(-1, Math.min(MAP_CONFIG.maxZoom, z)));
  }

  function resetView() {
    mapRef.current?.flyTo(
      MAP_CONFIG.initialCenter as L.LatLngTuple,
      MAP_CONFIG.initialZoom,
      { duration: 1 }
    );
  }

  return (
    <div className="map-wrap">
      <div className="map-tools">
        <button type="button" onClick={() => zoomBy(1)} aria-label="Acercar">
          +
        </button>
        <button type="button" onClick={() => zoomBy(-1)} aria-label="Alejar">
          −
        </button>
        <button type="button" onClick={resetView}>
          Centro
        </button>
      </div>
      <div ref={containerRef} className="map-leaflet" />
    </div>
  );
}

function makePin(category: Category): L.DivIcon {
  const info = CATEGORY_INFO[category];
  return L.divIcon({
    className: "pin-wrap",
    html: `<div class="pin" style="background:${info.color}">${info.icon}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });
}
