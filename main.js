// Define a projection
proj4.defs("EPSG:3346", "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");

// Define a view
var view = new ol.View({
    projection: 'EPSG:3346',
    center: [581213.36060258, 6061509.5785040455],
    zoom: 18,
})
//define basemap
let OSMBaseMap = new ol.layer.Tile({
    source: new ol.source.OSM()
});

//Define array of layers
let layerArray = [OSMBaseMap];

//Define map
let map = new ol.Map({
    target: 'map',
    layers: layerArray,
    view: view,
})