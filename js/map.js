// L is brought in as a global from the previous <script> tag in index.html.

const center = L.latLng(0, 0);
const zoom = 1;

const map = L.map("map", {
  center,
  zoom,
});
