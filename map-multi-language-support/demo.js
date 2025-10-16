/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  apikey: window.apikey
});

var defaultLayers = platform.createDefaultLayers();

// Step 2: create default layers specifying simplified Chinese as primary language
var defaultLayers = platform.createDefaultLayers({
  lg: "zh",
});

// Step 3: initialize a map - this map is centered over Hong Kong.
var map = new H.Map(
  document.getElementById("map"),
  defaultLayers.vector.normal.map,
  {
    center: { lat: 22.2783, lng: 114.1588 },
    zoom: 12,
    pixelRatio: window.devicePixelRatio || 1,
  }
);
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener("resize", () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Display default UI components on the map and change default
// language to simplified Chinese.
// Besides supported language codes you can also specify your custom translation
// using H.ui.i18n.Localization.
var ui = H.ui.UI.createDefault(map, defaultLayers, "zh-CN");