// src/pages/Location.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon not displaying correctly
let DefaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
const LocationMap = () => {
    const position = [39.27524, -76.61694]; // Example coordinates
    const markerRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (markerRef.current) {
                markerRef.current.openPopup();
            }
        }, 100); // Adjust the delay as necessary

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }, []);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker ref={markerRef} position={position}>
                    <Popup>
                        <a href="https://www.google.com/maps/place/83+W+West+St,+Baltimore,+MD+21230/">83 W West St, Baltimore, MD 21230</a>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LocationMap;
