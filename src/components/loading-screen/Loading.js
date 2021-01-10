import React from 'react';
import './Loading.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';


export default function Loading() {
    return (
        <div className='loading-container'>
            <RestaurantIcon style={{fontSize: 300}} />
            <h1>Loading data...</h1>
        </div>
    )
}
