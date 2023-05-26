# GeoSense

This is a Node.js module that provides various functions for geolocation and weather-related operations.

## Installation

To install this module, run the following command:


npm install geosense

## Usage
Import the module in your Node.js application using the following code:

const {RequiredFunction} = require('geosense');


### getGeolocationByIP(ipAddress)
Retrieves the geolocation (latitude and longitude) of an IP address.
ipAddress (string): The IP address to retrieve the geolocation for.

Example usage:
const geolocation = await yourModule.getGeolocationByIP('123.45.67.89');
console.log(geolocation);


### calculateDistance(lat1, lon1, lat2, lon2)
Calculates the distance (in kilometers) between two sets of latitude and longitude coordinates.
lat1 (number): Latitude of the first point.
lon1 (number): Longitude of the first point.
lat2 (number): Latitude of the second point.
lon2 (number): Longitude of the second point.

Example usage:
const distance = await yourModule.calculateDistance(37.7749, -122.4194, 34.0522, -118.2437);
console.log(distance);


### isInGeofence(latitude, longitude, geofenceCoordinates)
Checks if a given latitude and longitude point is within a geofence.
latitude (number): Latitude of the point.
longitude (number): Longitude of the point.
geofenceCoordinates (array): Array of coordinates defining the geofence.

Example usage:
const isInFence = await yourModule.isInGeofence(37.7749, -122.4194, [
  { lat: 37.7749, lon: -122.4194 },
  { lat: 34.0522, lon: -118.2437 },
  { lat: 40.7128, lon: -74.0060 }
]);
console.log(isInFence);


### getWeatherDatabyLatLon(latitude, longitude)
Retrieves weather data based on latitude and longitude coordinates.
latitude (number): Latitude of the location.
longitude (number): Longitude of the location.

Example usage:
const weatherData = await yourModule.getWeatherDatabyLatLon(37.7749, -122.4194);
console.log(weatherData);


### getWeatherDataByIP(ipAddress)
Retrieves weather data based on an IP address.
ipAddress (string): The IP address to retrieve weather data for.

Example usage:
const weatherData = await yourModule.getWeatherDataByIP('123.45.67.89');
console.log(weatherData);


### getTimezoneByCoordinates(latitude, longitude)
Retrieves the timezone information based on latitude and longitude coordinates.
latitude (number): Latitude of the location.
longitude (number): Longitude of the location.

Example usage:
const timezone = await yourModule.getTimezoneByCoordinates(37.7749, -122.4194);
console.log(timezone);


### reverseGeocode(latitude, longitude)
Performs reverse geocoding and retrieves location information based on latitude and longitude coordinates.
latitude (number): Latitude of the location.
longitude (number): Longitude of the location.

Example usage:
const location = await yourModule.reverseGeocode(37.7749, -122.4194);
console.log(location);


### geocode(address)
Performs forward geocoding and retrieves latitude, longitude, and formatted address information based on an address.
address (string): The address to geocode.

Example usage:
const coordinates = await yourModule.geocode('New York City');
console.log(coordinates);
