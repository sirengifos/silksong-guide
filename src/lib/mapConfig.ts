export const MAP_CONFIG = {
  tileUrl: "https://scripterswarmap.b-cdn.net/ss_v3/{z}_{x}_{y}.png?v=1",
  tileSize: 1024,
  zoomReverse: true,
  serverMaxZoom: 7,
  minZoom: -1,
  maxZoom: 2,
  bounds: [
    [-4096, 0],
    [0, 4096],
  ] as [number, number][],
  initialCenter: [-700, 250] as [number, number],
  initialZoom: 2,
  attribution:
    'Mapa y datos: <a href="https://scripterswar.com/silksong/map" target="_blank" rel="noreferrer">scripterswar (Samuel Magnan)</a> · Hollow Knight: Silksong de Team Cherry',
};
