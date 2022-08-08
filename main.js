
// Define a view
var view = new ol.View({
    projection: 'EPSG:4326',
    center: [-73.99241933642752, 40.71473962899501],
    zoom: 14,
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

let inputJSON= {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            -74.0097427368164,
                            40.710442625512925
                        ],
                        [
                            -74.00073051452635,
                            40.73834794025951
                        ],
                        [
                            -73.98279190063477,
                            40.740168859407845
                        ],
                        [
                            -73.98073196411133,
                            40.72774659982564
                        ]
                    ]
                }
            }
        ]
}

//Vector source
let vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON().readFeatures(inputJSON))
})
//Vector layer
let vectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#FF0000',
            lineJoin: 'bevel',
            width: 5,
            lineDash: [5,15],
        })
    })
})
//Add vector layer to map

map.addLayer(vectorLayer)