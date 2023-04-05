import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state === 'loading' ? 'Loading...' : ""}</div>
            <Outlet></Outlet> 
        </div>
    );
};

export default Home;    <h2>This is home</h2>