const map = L.map('map', {
    center: [30, 26],
    zoom: 3
});

L.tileLayer('https://api.mapbox.com/styles/v1/villewilson/ckylnlbyv030614tf77qxuy1s/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> OCCRP, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8,
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

const member28 = L.marker([55.75, 37.61]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Istories.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>iStories</h3><hr>
            <span>Moscow, Russia</span>
    </div>
`);

const member29 = L.marker([55.75, 37.71]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Novaya Gazeta</h3><hr>
            <span>Moscow, Russia</span>
    </div>
`);

const member30 = L.marker([52.23, 21.04]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Istories.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Fundacja Reporterów - the Reporters Foundation</h3><hr>
            <span>Poland, Warsaw</span>
    </div>
`);

const member31 = L.marker([48.14, 17.1]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Investigative Center of Jan Kuciak</h3><hr>
            <span>Bratislava, Slovak Republic</span>
    </div>
`);

const member32 = L.marker([46.05, 14.5]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Ostro.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Ostro</h3><hr>
            <span>Ljubljana, Slovenia</span>
    </div>
`);

const member33 = L.marker([36.8, 10.18]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Inkyfada</h3><hr>
            <span>Tunis, Tunisia</span>
    </div>
`);

const member34 = L.marker([31.94, 35.91]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Arij.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>ARIJ - Arab Reporters for Investigative Journalism</h3><hr>
            <span>Amman, Jordan</span>
    </div>
`);

const member35 = L.marker([42.97, 74.6]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Kloop.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Kloop Media</h3><hr>
            <span>Bishkek, Kyrgyzstan</span>
    </div>
`);

const member36 = L.marker([42.97, 74.7]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Radio Free Europe / Radio Liberty</h3><hr>
            <span>Bishkek, Kyrgyzstan</span>
    </div>
`);

const member37 = L.marker([6.13, 1.22]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>L'Alternative</h3><hr>
            <span>Lome, Togo</span>
    </div>
`);

const member38 = L.marker([13.51, 2.11]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>L'Evenement</h3><hr>
            <span>Niamey, Niger</span>
    </div>
`);

const member39 = L.marker([-24.63, 25.91]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Center for Investigative Journalism - INK</h3><hr>
            <span>Gaborone, Botswana</span>
    </div>
`);

const member40 = L.marker([-11.44, 34]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>MCIJ - Malawi Center for Investigative Journalism</h3><hr>
            <span>Mzuzu, Malawi</span>
    </div>
`);

const member41 = L.marker([6.29, -10.78]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>New Narratives</h3><hr>
            <span>Monrovia, Liberia</span>
    </div>
`);

const member42 = L.marker([-22.56, 17.08]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Namibian</h3><hr>
            <span>Windhoek, Namibia</span>
    </div>
`);

const member43 = L.marker([-25.48, 30.97]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Oxpeckers</h3><hr>
            <span>Mbombela, South Africa</span>
    </div>
`);

const member44 = L.marker([12.64, -8]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Depeche du Mali</h3><hr>
            <span>Bamako, Republic of Mali</span>
    </div>
`);

const member45 = L.marker([9.05, 7.41]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Premium Times</h3><hr>
            <span>Abuja, Nigeria</span>
    </div>
`);

const member46 = L.marker([-1.29, 36.83]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Africa Uncensored</h3><hr>
            <span>Nairobi, Kenya</span>
    </div>
`);

const member47 = L.marker([-1.29, 36.93]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Elephant.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>The Elephant</h3><hr>
            <span>Nairobi, Kenya</span>
    </div>
`);

const member48 = L.marker([-20.16, 57.49]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Le Defi Media Group</h3><hr>
            <span>Port-Louis, Mauritius</span>
    </div>
`);

const member49 = L.marker([-25.97, 32.58]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Verdade</h3><hr>
            <span>Maputo, Mozambique</span>
    </div>
`);

const member50 = L.marker([-33.92, 18.42]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Noseweek</h3><hr>
            <span>Cape Town, South Africa</span>
    </div>
`);

const member51 = L.marker([51.5, -0.12]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/AfricaConfidential.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Africa Confidential</h3><hr>
            <span>Undisclosed location in UK</span>
    </div>
`);

const member52 = L.marker([5.56, -0.18]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/NewsBridge.jpg">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>News Bridge Africa</h3><hr>
            <span>Accra, Ghana</span>
    </div>
`);

const member53 = L.marker([-15.41, 28.3]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/Diggers.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Newsdiggers Media Limited</h3><hr>
            <span>Lusaka, Zambia</span>
    </div>
`);

const member54 = L.marker([-26.2, 28.03]).addTo(map).bindPopup(`
    <div class="popup">
        <img src="./images/MailGuardian.png">
        <div class="separator"></div>
        <div class="popup-list">
            <h3>Mail & Guardian</h3><hr>
            <span>Johannesburg, South Africa</span>
    </div>
`);

const member55 = L.marker([9.93, -84.1]).addTo(map).bindPopup(`
    <div class="popup">
        <div class="popup-list">
            <h3>Centro Latino Americano de Investigacion Periodistica (CLIP)</h3><hr>
            <span>San Jose, Costa Rica</span>
    </div>
`);