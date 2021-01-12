import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';

/// STYLE
import './TruckPopUp.css';

/// COMPONENTS
import MenuContainer from '../menu/MenuContainer.js';

/// INITAL Data
const starSymbol = '\u{1f929}';

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
        <>
        <div className='truckpopup'>
            <h1>{truckData.truck_name}</h1>
            <h4>Avg Rating: {`${starSymbol.repeat(truckData.average_stars)}`}/5</h4>
            {/* <h3>Type: {truckData.cusine_type} !</h3> */}
        </div>

        <div className="menu-container">
            <MenuContainer />
        </div>
        </>
    );
}

