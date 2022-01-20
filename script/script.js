const map = L.map('map', {
    center: [48.208, 16.37],
    zoom: 5
});

L.tileLayer('https://api.mapbox.com/styles/v1/villewilson/ckylnlbyv030614tf77qxuy1s/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> OCCRP, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmlsbGV3aWxzb24iLCJhIjoiY2plZnpzeDFwMGt0dTJ3bnMyNGtwYmJ2bSJ9.OiSIqI2_gVYobgR395JCcw'
}).addTo(map);

const james = L.marker([51.48, -3.18]).addTo(map);
james.bindPopup("Approximate location of James' favorite pub").openPopup();

const tiger = L.marker([43.86, 18.41]).addTo(map);
tiger.bindPopup("<h2>Blind Tiger</h2><p>This is where we drank a bit too much last year in September</p>").openPopup();