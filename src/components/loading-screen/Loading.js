import React from 'react';
import './Loading.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';


export default function Loading() {
    /// INITIAL State
    const [dots, setDots] = React.useState(0);

    /// HELPER Functions
    React.useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots => dots + 1);          // ask eric, is dots within setDots closure here?
        }, 1000);

        return () => clearInterval(interval); //runs after component unmounts

    }, []);


    return (
        <div className='loading-container'>
            <RestaurantIcon style={{fontSize: 150}} />
            <h1>loading{`${(dots % 5) === 0 ? '' : '.'.repeat(dots % 5)}`}</h1>        {/* ask eric */}
            
        </div>
    );
}
