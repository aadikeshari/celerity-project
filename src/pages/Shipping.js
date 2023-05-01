import React from 'react';
import Progressbar from '../components/Progressbar';
import SearchBar from '../components/SearchBar/SearchBar';
import { useLocation } from 'react-router-dom';
import ShippingDetails from '../components/ShippingDetails/ShippingDetails';

function Shipping() {
    const location=useLocation();
    return (
        <>
            <Progressbar/>
            <SearchBar data={location.state}/>
            <hr/>
            <ShippingDetails/>
        </>
    );
}

export default Shipping;