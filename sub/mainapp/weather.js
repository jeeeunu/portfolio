function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in",lat,lon)
}

function onGeoError(){
  alert("Can't find you.");
}



navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);