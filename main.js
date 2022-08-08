
// Define a view
var view = new ol.View({
    projection: 'EPSG:3857',
    center: [2814279.1728984285, 7302225.11648295],
    zoom: 12,
})

//Define map
let OSMBaseMap = new ol.layer.Tile({
    source: new ol.source.OSM({
        wrapX: false,
    })
})

//Define array of layers
let layerArray = [OSMBaseMap];

//Define map
let map = new ol.Map({
    target: 'map',
    layers: layerArray,
    view: view,
});

//Image source
let imgSource = new ol.source.ImageStatic({
    attributions: '<b>boat</b>',
    url: 'boat.jpg',
    imageExtent: [2814107.4881669288, 7302045.967197906, 2814450.8576299283, 7302404.265767993] //map.getView().calculateExtent()
});

//Defining a feature
// Adding image based on coordinates
// LAYER -> SOURCE -> FEATURE : CO-ORDINATES and Image

// Defining a feature
var Feature = new ol.Feature({
    geometry: new ol.geom.Point([2814279.1728984285, 7302225.11648295])
})

var style = new ol.style.Style({
    image: new ol.style.Icon({
        src: 'boat.jpg',
        scale: 0.05
    })
})

Feature.setStyle(style)

// Define a source
var vectorSource = new ol.source.Vector({
    features: [Feature]
})

// Define a layer
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
})

// add this layer to map
map.addLayer(vectorLayer)

//Adding WMS layer to the map

//Adding like a tile
//define tile source
var tileSource = new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/tiger/wms',
    params: { 'LAYERS': 'tiger:tiger_roads', 'TILED': true },
    serverType: 'geoserver',
    crossOrigin: 'anonymous'
})

//define tile layer
let tileLayer = new ol.layer.Tile({
    source: tileSource
})
// adding layer to map
map.addLayer(tileLayer);

//Adding like an image
let imageSource = new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/tiger/wms',
    params: { 'LAYERS': 'tiger:poly_landmarks'},
    serverType: 'geoserver',
    crossOrigin: 'anonymous'
})
let tileImage = new ol.layer.Image({
    source: imageSource,
})
map.addLayer(tileImage);