import React from 'react';
import axios from 'axios';
import './MapContainer.css';
import Basemap from './base-map/Basemap.js';
import Loading from '../loading-screen/Loading.js';

export default function MapContainer() {
    // define state
    const [trucksLatLng, setTrucksLatLng] = React.useState();

    // fetch trucks coordinates
    React.useEffect(() => {
        axios.get('https://foodtruck-backend-api.herokuapp.com/api/trucks')
        .then(response => setTrucksLatLng(response.data));
    }, []);

    // render loading screen if data is loading
    if (!trucksLatLng){
        return <Loading/>;
    }

    return (
        <div className='leaflet-container'>
            <Basemap trucksLatLng={trucksLatLng} />
        </div>
    );
}
