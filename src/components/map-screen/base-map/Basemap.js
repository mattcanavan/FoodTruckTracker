import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import icon from './food-truck-icon.svg'; //courtesy of Freepik. thank you!
import './Basemap.css';

/// Components
import TruckPopUp from '../../truck-popup/TruckPopUp.js';


/// DEFAULT Settings
const mapCenter = [40.72611, -73.99883]; //lat, lng
const defaultZoom = 13;
const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [35, 35]
});


export default function Basemap(props) {
    const [activeTruck, setActiveTruck] = React.useState();

    return (
        <div>
            {/* DEFINE THE CONTAINER */}
            <MapContainer center={mapCenter} zoom={defaultZoom}>
           
                {/* DEFINE THE TILE */}
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* CREATE POINTS TO BE MAPPED */}
                {props.trucksLatLng.map((truck) => {
                    return (
                        <Marker 
                        key={truck.truck_id}
                        icon={customIcon}
                        position={[
                            truck.current_location_lat,
                            truck.current_location_long
                        ]}
                        eventHandlers={
                            {click: () => setActiveTruck(truck)}
                        }
                        />
                    );
                })}

                {/* CREATE DATA LABELS FOR POINTS */}
                {activeTruck && (
                    <Popup className='basemap-popup'
                    position={[
                        activeTruck.current_location_lat,
                        activeTruck.current_location_long  
                    ]}
                    onClose={() => setActiveTruck(null)} //handler provided by Leaflet
                    >
                        <div>
                            <TruckPopUp activeTruck={activeTruck} />
                        </div>
                    </Popup>
                )}

            </MapContainer>

        </div>
    );
}
