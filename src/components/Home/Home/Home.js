import React from 'react';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;