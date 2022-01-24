const map = L.map('map', {
    center: [48.208, 20],
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

const member01 = L.marker([40.17, 44.51]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Hetq.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>HETQ Armenia</h3><hr>
            <span>Yerevan, Armenia</span>
    </div>
`);

const member02 = L.marker([41.74, 44.7]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Ifact.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>iFact.ge</h3><hr>
            <span>Tbilisi, Georgia</span>
    </div>
`);

const member03 = L.marker([41.74, 44.8]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Journalistic Data Processing Centre</h3><hr>
            <span>Tbilisi, Georgia</span>
    </div>
`);

const member04 = L.marker([41.74, 44.7]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/StudioMonitor.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Studio Monitor</h3><hr>
            <span>Tbilisi, Georgia</span>
    </div>
`);

const member05 = L.marker([48.2, 16.37]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Dossier.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Dossier</h3><hr>
            <span>Vienna, Austria</span>
    </div>
`);

const member06 = L.marker([43.86, 18.41]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Cin.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>CIN</h3><hr>
            <span>Sarajevo, BIH</span>
    </div>
`);

const member07 = L.marker([42.5, 27.46]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Bivol.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Bivol</h3><hr>
            <span>Burgas, Bulgaria</span>
    </div>
`);

const member08 = L.marker([50.07, 14.42]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Investigace.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Ceske Centrum Pro Investigativni Zurnalistiku</h3><hr>
            <span>Prague, Czech Republic</span>
    </div>
`);

const member09 = L.marker([40.38, 49.83]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/MeydanTV.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Meydan TV</h3><hr>
            <span>Baku, Azerbaijan</span>
    </div>
`);

const member10 = L.marker([47.49, 19.06]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Atlatszo.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>atlatszo.hu</h3><hr>
            <span>Budapest, Hungary</span>
    </div>
`);

const member11 = L.marker([47.49, 19.16]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Direkt36.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Direkt 36</h3><hr>
            <span>Budapest, Hungary</span>
    </div>
`);

const member12 = L.marker([45.46, 9.18]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/IrpiMedia.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>IRPI</h3><hr>
            <span>Milan, Italy</span>
    </div>
`);

const member13 = L.marker([42.65, 21.16]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/BirnKosovo.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>BIRN Kosovo</h3><hr>
            <span>Pristina, Kosovo</span>
    </div>
`);

const member14 = L.marker([56.94, 24.11]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/ReBaltica.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Re:Baltica</h3><hr>
            <span>Riga, Latvia</span>
    </div>
`);

const member15 = L.marker([54.68, 25.28]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/15min.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>UAB15min</h3><hr>
            <span>Vilnius, Lithuania</span>
    </div>
`);

const member16 = L.marker([54.68, 25.38]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Siena.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Siena</h3><hr>
            <span>Vilnius, Lithuania</span>
    </div>
`);

const member17 = L.marker([42, 21.43]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Scoop.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Scoop</h3><hr>
            <span>Skopje, North Macedonia</span>
    </div>
`);

const member18 = L.marker([42, 21.53]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Irl.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Investigative Reporting Lab - IRL</h3><hr>
            <span>Skopje, North Macedonia</span>
    </div>
`);

const member19 = L.marker([47.01, 28.83]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Association of Independent TV Journalists</h3><hr>
            <span>Chisinau, Moldova</span>
    </div>
`);

const member20 = L.marker([47.01, 28.93]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/RiseMoldova.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>RISE Moldova</h3><hr>
            <span>Chisinau, Moldova</span>
    </div>
`);

const member21 = L.marker([42.43, 19.26]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Mans.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Mans</h3><hr>
            <span>Podgorica, Montenegro</span>
    </div>
`);

const member22 = L.marker([44.43, 26.1]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/RiseProject.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Rise Project</h3><hr>
            <span>Bucharest, Romania</span>
    </div>
`);

const member23 = L.marker([46.77, 23.58]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/AtlatszoErdely.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Átlátszó Erdély</h3><hr>
            <span>Cluj - Napoca, Romania</span>
    </div>
`);

const member24 = L.marker([44.8, 20.45]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Cins.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>CINS</h3><hr>
            <span>Belgrade, Serbia</span>
    </div>
`);

const member25 = L.marker([44.8, 20.55]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Krik.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>KRIK</h3><hr>
            <span>Belgrade, Serbia</span>
    </div>
`);

const member26 = L.marker([50.45, 30.43]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Slidstvo.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Slidstvo.info</h3><hr>
            <span>Kyiv, Ukraine</span>
    </div>
`);

const member27 = L.marker([50.45, 30.53]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/MediaDev.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Media Development Foundation</h3><hr>
            <span>Kyiv, Ukraine</span>
    </div>
`);