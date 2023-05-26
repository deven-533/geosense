
import fetch from "node-fetch";



export async function getGeolocationByIP(ipAddress) {
    const IPAPIKey = 'bcd31b9120776f6e4b52a5d2f18f589b';
    const apiUrl = `http://api.ipstack.com/${ipAddress}?access_key=${IPAPIKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const { latitude, longitude } = data;
        return { latitude, longitude };
    } catch (error) {
        console.error('Error retrieving geolocation:', error);
        throw error;
    }
}


export async function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

export async function isInGeofence(latitude, longitude, geofenceCoordinates) {
    for (const coord of geofenceCoordinates) {
        const distance = calculateDistance(latitude, longitude, coord.lat, coord.lon);
        if (distance <= geofenceRadius) {
            return true;
        }
    }
    return false;
}


export async function getWeatherDatabyLatLon(latitude, longitude) {
    const wapiKey = 'a7906c8f56564e0e8045cb07923230e7';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${wapiKey}`;

    const response = await fetch(weatherApiUrl);
    const weatherData = await response.json();
    return weatherData;
}

export async function getWeatherDataByIP(ipAddress) {
    const { latitude, longitude } = await getGeolocationByIP(ipAddress);
    const weatherData = await getWeatherDatabyLatLon(latitude, longitude);
    return weatherData;
}


export async function getTimezoneByCoordinates(latitude, longitude) {
    const tzapiKey = 'Y737EMG9AVDZ';
    const apiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${tzapiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to retrieve timezone');
        }
        const data = await response.json();

        const { zoneName, countryCode } = data;
        return { zoneName, countryCode };
    } catch (error) {
        console.error('Error retrieving timezone:', error);
        throw error;
    }
}

export async function reverseGeocode(latitude, longitude) {
    const rgapiKey = '0cf4f171f63041ac8af49e78c3de0377';
    const apiUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${rgapiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to perform reverse geocoding');
        }
        const data = await response.json();

        const { city, country, formatted } = data.features[0].properties;
        return { city, country, formatted };
    } catch (error) {
        console.error('Error performing reverse geocoding:', error);
        throw error;
    }
}

export async function geocode(address) {
    const encodedAddress = encodeURIComponent(address);
    const gapiKey = '0cf4f171f63041ac8af49e78c3de0377';
    const apiUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodedAddress}&apiKey=${gapiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to perform forward geocoding');
        }
        const data = await response.json();

        const { lat, lon, formatted } = data.features[0].properties;
        return { latitude: lat, longitude: lon, formatted };
    } catch (error) {
        console.error('Error performing forward geocoding:', error);
        throw error;
    }
}














