import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const Home = () => {
    const [exercise, setExercise] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    }, [])
    return (
        <div className='row'>
            <div className="col-lg-9 py-4 bg-light">
                <div className="container">
                    <Header></Header>
                </div>
            </div>
            <div className="col-lg-3 p-5">
                
            </div>
        </div>
    );
};

export default Home;