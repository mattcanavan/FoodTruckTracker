import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';


export default function MenuContainer() {
    /// INITIAL State
    const [activeMenu, setActiveMenu] = React.useState();

    /// HELPER Functions
    React.useEffect(() => {
        axiosWithAuth()
        .get('/menus/3')
        .then(response => (
            setActiveMenu(response.data)
        ));
    }, []);

    if(!activeMenu){
        return null;
    }

    return (
        <div>
            <h2>Menu</h2>
            {activeMenu.map(element => {
                return (
                    <div key={element.item_id}>
                        <h3>{element.item_name}</h3>
                        <h4>{element.item_description}</h4>
                        <h4>$ {element.item_price}</h4>
                    </div>
                );
            })}
        </div>
    );
}
