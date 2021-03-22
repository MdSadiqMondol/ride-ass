import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import TypeOfVehicle from '../TypeOfVehicle/TypeOfVehicle';
import './Home.css'
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(fakeData);
    }, []);
    return (
        <div>
            <div className = "vehicle" >
                {
                    data.map(vehicle =><TypeOfVehicle key={vehicle.id} vehicle={vehicle}></TypeOfVehicle>)
                }
            </div>
        </div>
    );
};

export default Home;