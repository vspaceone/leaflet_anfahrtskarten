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
var doorbell = L.marker([48.0676538, 8.4444338], {icon: doorbellIcon}).addTo(map).bindPopup("Hier befindet sich am grünen Rundlicht eine Klingel, ding dong!");
var busStopPS1 = L.marker([48.0691244, 8.4424004], {icon: busStopIcon}).addTo(map).bindPopup("Bushaltestelle Peterzeller Str. Mitte, Linien 660 und 6, Ankunft aus Richtung Villigen Bahnhof, Abfahrt in Richtung St. Georgen");
var busStopPS2 = L.marker([48.0698920, 8.4415372], {icon: busStopIcon}).addTo(map).bindPopup("Bushaltestelle Peterzeller Str. Mitte, Linie 660, Ankunft aus Richtung St. Georgen im Schwarzwald, Abfahrt in Richtung Villingen Bahnhof");
var busStopK = L.marker([48.0696266, 8.4406211], {icon: busStopIcon}).addTo(map).bindPopup("Bushaltestelle Klosterhalde, Linie 6, Abfahrt in Richtung Villingen Bahnhof");
var busStopG = L.marker([48.0729756, 8.4463894], {icon:busStopIcon}).addTo(map).bindPopup("Bushaltestelle Goldenbühl, Linie 5, Ankunft aus Richtung Wöschhalde, Abfahrt in Richtung Villingen Bahnhof");
var busStopOS = L.marker([48.0740149, 8.4506220], {icon:busStopIcon}).addTo(map).bindPopup("Bushaltestelle Offenburger Straße, Linie 4, Ankunft aus Richtung Villingen Bahnhof, Abfahrt in Richtung Wöschhalde");
var busStopKS1 = L.marker([48.0636598, 8.4430050], {icon:busStopIcon}).addTo(map).bindPopup("Bushaltestelle Kirnacher Straße, Linie 500, Ankunft aus Richtung Villingen Bahnhof, Abfahrt in Richtung Furtwangen im Schwarzwald");
var busStopKS2 = L.marker([48.0632231, 8.4437321], {icon:busStopIcon}).addTo(map).bindPopup("Bushaltestelle Kirnacher Straße, Linie 500, Ankunft aus Richtung Furtwangen im Schwarzwald, Abfahrt in Richtung Villingen Bahnhof");
var carMarker = L.marker([48.0687937, 8.4464153], {icon: carIcon}).addTo(map).bindPopup("Hier befindet sich die Einfahrt zum Gelände, vroom vroom!");
var door = L.marker ([48.0679484, 8.4445526], {icon: doorIcon}).addTo(map).bindPopup("Tor 8.2 vom Technologiepark VS, hier wird jemand kommen, um dir aufzumachen");
var door2 = L.marker ([48.06779, 8.44423], {icon: doorIcon}).addTo(map).bindPopup("Die Tür zum vspace");
var door3 = L.marker ([48.06772, 8.44365], {icon: doorIcon}).addTo(map).bindPopup("Tor 8.4 vom Technologiepark VS, unsere Schlüssel funktionieren auch hier")
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
}).addTo(map).bindPopup("Autofahrt zum Parkplatz");

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
}).addTo(map).bindPopup("Laufweg zum vspace");

var busStopPath2 = L.polyline([
    [48.0694083, 8.4422873],
    [48.0694017, 8.4422435],
    [48.0694757, 8.4422281],
    [48.0695518, 8.4422334],
    [48.0695724, 8.4421235],
    [48.0696064, 8.4420470],
    [48.0696579, 8.4419924],
    [48.0696377, 8.4419172],
    [48.0696163, 8.4418371],
    [48.0697041, 8.4417768],
    [48.0697650, 8.4417017],
    [48.0698166, 8.4416306],
    [48.0698920, 8.4415372]], {
        color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

var busStopPath3 = L.polyline([
    [48.0696163, 8.4418371],
    [48.0695670, 8.4418552],
    [48.0695509, 8.4418184],
    [48.0695701, 8.4415542],
    [48.0696593, 8.4409312],
    [48.0696188, 8.4409158],
    [48.0695831, 8.4409037],
    [48.0696266, 8.4406211]], {
        color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

var busStopPath4 = L.polyline([
    [48.0692887, 8.4431410],
    [48.0693393, 8.4431565],
    [48.0693840, 8.4431711],
    [48.0694433, 8.4431871],
    [48.0694384, 8.4432258],
    // sidewalk lahrer str 1-7 is not mapped
    [48.0694085, 8.4433986],
    [48.0701439, 8.4436949],
    [48.0705078, 8.4438965],
    [48.0707329, 8.4440316],
    [48.0710907, 8.4443588],
    // now on dedicated foot path again
    [48.0711194, 8.4442857],
    [48.0713678, 8.4445877],
    [48.0715337, 8.4448393],
    [48.0716382, 8.4450249],
    [48.0716764, 8.4450940],
    [48.0719745, 8.4461716],
    [48.0720254, 8.4462808],
    [48.0721160, 8.4462665],
    [48.0722887, 8.4462548],
    [48.0724864, 8.4462633],
    [48.0726878, 8.4463144],
    [48.0727302, 8.4463307],
    [48.0727676, 8.4463422],
    [48.0729335, 8.4463732],
    [48.0729756, 8.4463894]], {
            color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

var busStopPath5 = L.polyline([
    [48.0719745, 8.4461716],
    [48.0718766, 8.4462057],
    [48.0718087, 8.4462286],
    [48.0717858, 8.4463097],
    [48.0717352, 8.4463996],
    [48.0717027, 8.4464519],
    [48.0716443, 8.4465078],
    [48.0716753, 8.4465862],
    [48.0717088, 8.4466615],
    [48.0716753, 8.4466946],
    [48.0716042, 8.4468343],
    [48.0716110, 8.4469290],
    [48.0716863, 8.4472072],
    [48.0717255, 8.4474820],
    // on the road
    [48.0716832, 8.4474928],
    [48.0716922, 8.4477862],
    [48.0716799, 8.4480783],
    [48.0715865, 8.4489229],
    [48.0715232, 8.4495751],
    [48.0720857, 8.4495916],
    [48.0721383, 8.4495910],
    // back on foot path
    [48.0722442, 8.4499123],
    [48.0723198, 8.4499057],
    [48.0724200, 8.4498370],
    [48.0725076, 8.4497874],
    [48.0725860, 8.4497647],
    [48.0726327, 8.4497457],
    [48.0726330, 8.4498082],
    [48.0733562, 8.4504205],
    [48.0739149, 8.4508530],
    [48.0740149, 8.4506220]], {
        color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

var busStopPath5 = L.polyline([
    [48.0678059, 8.4429585],
    [48.0675312, 8.4428554],
    [48.0675328, 8.4427717],
    [48.0674589, 8.4425031],
    [48.0672217, 8.4425318],
    [48.0671043, 8.4425781],
    [48.0670249, 8.4426230],
    [48.0669347, 8.4427159],
    [48.0669039, 8.4427044],
    [48.0668376, 8.4426797],
    [48.0667868, 8.4426627],
    [48.0667848, 8.4425714],
    [48.0667597, 8.4425271],
    [48.0667274, 8.4425084],
    [48.0666409, 8.4425070],
    [48.0665746, 8.4425077],
    [48.0659723, 8.4423405],
    [48.0659513, 8.4423347],
    [48.0658788, 8.4423124],
    [48.0658182, 8.4422938],
    [48.0655897, 8.4422187],
    [48.0653924, 8.4421783],
    [48.0653324, 8.4421543],
    [48.0648642, 8.4419028],
    [48.0648255, 8.4418727],
    [48.0647768, 8.4418385],
    [48.0645290, 8.4416145],
    [48.0644375, 8.4415756],
    [48.0643820, 8.4415749],
    [48.0643238, 8.4415988],
    [48.0642628, 8.4416268],
    [48.0642120, 8.4416819],
    [48.0641684, 8.4417460],
    [48.0641331, 8.4418318],
    [48.0637866, 8.4426996],
    [48.0636959, 8.4428800],
    [48.0636598, 8.4430050]], {
        color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

var busStopPath6 = L.polyline([
    [48.0636959, 8.4428800],
    [48.0636631, 8.4428516],
    [48.0636477, 8.4428436],
    [48.0635806, 8.4427958],
    [48.0635582, 8.4427794],
    [48.0635341, 8.4427615],
    [48.0634864, 8.4428982],
    [48.0633380, 8.4434165],
    [48.0632539, 8.4436020],
    [48.0632231, 8.4437321]], {
        color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

var parkingPath = L.polyline([
    [48.067758, 8.445307],
    [48.0676815, 8.4452828],
    [48.0676817, 8.4450842],
    [48.0676184, 8.4444394]], {
        color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

var insidePath = L.polyline([
    [48.0677894, 8.4442272],
    [48.0679878, 8.4443088],
    [48.0679423, 8.4445367],
    [48.0679506, 8.4445406],
    [48.0679484, 8.4445526]], {
        color: '#90ef91'
}).addTo(map).bindPopup("Laufweg zum vspace");

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