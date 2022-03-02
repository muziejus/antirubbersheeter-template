// L is brought in as a global from the previous <script> tag in index.html.
// same goes for data

const center = L.latLng(0, 0);
const zoom = 1;
const minZoom = -5;
const crs = L.CRS.Simple;

const map = L.map("map", {
  center,
  zoom,
  minZoom,
  crs,
});

const bounds = [
  [0, 0],
  [data.height, data.width],
];

L.imageOverlay("braun-map-of-vilnius.jpg", bounds).addTo(map);

map.fitBounds(bounds);

for (const place of data.places) {
  L.marker([place.y, place.x]).bindPopup(place.name).addTo(map);
}
