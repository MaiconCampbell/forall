
// Create the parameters for the reverse geocoding request:
var reverseGeocodingParameters = {
  prox: '52.5309,13.3847,150',
  mode: 'retrieveAddresses',
  maxresults: 1,
};

// Define a callback function to process the response:
function onSuccess(result) {
  var location = result.Response.View[0].Result[0];

  // Create an InfoBubble at the returned location with
  // the address as its contents:
  ui.addBubble(
    new H.ui.InfoBubble(
      {
        lat: location.Location.DisplayPosition.Latitude,
        lng: location.Location.DisplayPosition.Longitude,
      },
      { content: location.Location.Address.Label }
    )
  );
}

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
geocoder.reverseGeocode(reverseGeocodingParameters, onSuccess, function(e) {
  alert(e);
});
