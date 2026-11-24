function initMap() {
    const center = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center
    });

    const marker = new google.maps.Marker({
        position: { lat: 41.8781, lng: -87.6298 },
        map: map,
        title: "Chicago, Loop"
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Chicago, Loop</h3><p>This is the Loop area of Chicago.</p>"
    });

    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    });

    new google.maps.Circle({
        strokeColor: "#a96675",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#a8d5d2",
        fillOpacity: 0.35,
        map: map,
        center: center,
        radius: 2500
    });
}

const questionButton = document.getElementById('questionsButton');
if (questionButton){
    questionButton.addEventListener('click', function () {
        alert("If you have questions, contact me at:\nkdelgado3@hawk.illinoistech.edu");
    })
}
    