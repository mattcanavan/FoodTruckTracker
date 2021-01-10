import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';

export default function TruckPopUp(props) {
    const [truckData, setTruckData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    /// HELPER Functions
    function onClickGetTruck() {
        
        axiosWithAuth()
        .get(`/trucks/${props.activeTruck.truck_id}`)
        .then(response => {
            setTruckData(response.data);
            setIsLoading(false);
        })
        .catch(error => console.log({ message: error.message}));
    } 

    /// useEffects
    React.useEffect(() => onClickGetTruck(props), []);


    // render loading <h1> if data is loading
    if (isLoading){
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h4>Average Stars: {truckData.average_stars}</h4>
            <h1>{truckData.truck_name}</h1>
            <h3>Try {truckData.cusine_type} !</h3>
        </div>
    );
}

