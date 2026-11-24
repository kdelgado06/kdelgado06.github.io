function initMap() {
    const center = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center
    });
}