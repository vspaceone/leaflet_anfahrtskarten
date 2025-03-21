// map
var map = L.map('map').setView([48.068329, 8.444270], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// icons
var doorbellIcon = L.icon({
    iconUrl: './icons/doorbell.svg',

    iconSize:     [24, 24],
    iconAnchor:   [12, 12], 
    popupAnchor:  [0, -12]
});
var busStopIcon = L.icon({
    iconUrl: './icons/bus-marker.svg',

    iconSize:     [24, 24],
    iconAnchor:   [12, 12], 
    popupAnchor:  [0, -12]
});
var carIcon = L.icon({
    iconUrl: './icons/car.svg',

    iconSize:     [24, 24],
    iconAnchor:   [12, 12], 
    popupAnchor:  [0, -12]
});
var parkingIcon = L.icon({
    iconUrl: './icons/parking.svg',

    iconSize:     [24, 24],
    iconAnchor:   [12, 12], 
    popupAnchor:  [0, -12]
});
var doorIcon = L.icon({
    iconUrl: './icons/door.svg',

    iconSize:     [24, 24],
    iconAnchor:   [12, 12], 
    popupAnchor:  [0, -12]
});
var vspaceLogo = L.icon({
    iconUrl: './icons/logo_vspaceone.svg',

    iconSize:     [48, 48],
    iconAnchor:   [24, 24], 
    popupAnchor:  [0, -24]
});

// markers
var doorbell = L.marker([48.0676184, 8.4444394], {icon: doorbellIcon}).addTo(map).bindPopup("Hier befindet sich eine Klingel, ding dong!");
var busStop = L.marker([48.0691244, 8.4424004], {icon: busStopIcon}).addTo(map).bindPopup("Bushaltestelle Peterzeller Str. Mitte");
var carMarker = L.marker([48.0687937, 8.4464153], {icon: carIcon}).addTo(map).bindPopup("Hier befindet sich die Einfahrt zum Gelände, vroom vroom!");
var door = L.marker ([48.0679484, 8.4445526], {icon: doorIcon}).addTo(map).bindPopup("Hier wird jemand kommen, um dir aufzumachen");
var door2 = L.marker ([48.06779, 8.44423], {icon: doorIcon}).addTo(map).bindPopup("Die Tür zum vspace");
var parking = L.marker ([48.068018, 8.445447], {icon: parkingIcon}).addTo(map).bindPopup("Hier kann ein Auto abgestellt werden");
var vspaceMarker = L.marker ([48.0677192, 8.4443080], {icon: vspaceLogo}).addTo(map).bindPopup("Das ist unser Logo :3");

// polylines

var carDrive = L.polyline([
    [48.0682545, 8.4457005],
    [48.0683097, 8.4457276],
    [48.0682390, 8.4460636],
    [48.0682388, 8.4461014],
    [48.0682458, 8.4461542],
    [48.0682642, 8.4461965],
    [48.0682900, 8.4462191],
    [48.0686729, 8.4463682],
    [48.0687183, 8.4463835],
    [48.0687461, 8.4463948],
    [48.0687937, 8.4464153]], {
        color: '#0a770b'
}).addTo(map);

var busStopPath = L.polyline([
    [48.0691244, 8.4424004],
    [48.0692336, 8.4423367],
    [48.0694083, 8.4422873],
    [48.0694276, 8.4424151],
    [48.0693936, 8.4427625],
    [48.0693718, 8.4429289],
    [48.0693212, 8.4430079],
    [48.0692887, 8.4431410],
    [48.0692865, 8.4431653],
    [48.0692283, 8.4434372],
    [48.0690022, 8.4433634],
    [48.0687924, 8.4432948],
    [48.0682129, 8.4430973],
    [48.0679106, 8.4429942],
    [48.0678059, 8.4429585],
    [48.0677521, 8.4432373],
    [48.0676021, 8.4441221],
    [48.0676165, 8.4444394],
    [48.0676184, 8.4444394],
    [48.0677192, 8.4444747],
    [48.0677970, 8.4445022],
    [48.0678995, 8.4445422],
    [48.0679468, 8.4445622],
    [48.0679484, 8.4445526]], {
        color: '#90ef91'
    }).addTo(map);

var parkingPath = L.polyline([
    [48.067758, 8.445307],
    [48.0676815, 8.4452828],
    [48.0676817, 8.4450842],
    [48.0676184, 8.4444394]], {
        color: '#90ef91'
    }).addTo(map);

var insidePath = L.polyline([
    [48.0677894, 8.4442272],
    [48.0679878, 8.4443088],
    [48.0679423, 8.4445367],
    [48.0679506, 8.4445406],
    [48.0679484, 8.4445526]], {
        color: '#90ef91'
    }).addTo(map);

// polygons
var vspaceRoom = L.polygon([
    [48.0676669, 8.4444192],
    [48.0677103, 8.4444370],
    [48.0677285, 8.4443291],
    [48.0677706, 8.4443447],
    [48.067794, 8.444205],
    [48.067711, 8.44417],
    [48.0676917, 8.4442779],
    [48.0676791, 8.4443525]], {
        color: '#08A059'
}).addTo(map).bindPopup("Der vspace.one im ehemaligen SABA-Gebäude");

var parkingLot = L.polygon([
    [48.0682735, 8.4453854],
    [48.0682939, 8.4454025],
    [48.0683083, 8.4454263],
    [48.0683147, 8.4454540],
    [48.0683173, 8.4454959],
    [48.0683160, 8.4455448],
    [48.0683148, 8.4455827],
    [48.0682623, 8.4457913],
    [48.0682300, 8.4457667],
    [48.0676951, 8.4455468],
    [48.0677484, 8.4451508],
    [48.0682735, 8.4453854]], {
        color: '#0a770b'
}).addTo(map).bindPopup("Hier kann ein Auto abgestellt werden");