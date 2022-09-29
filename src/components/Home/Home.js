import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Header from '../Header/Header';
import Person from '../Person/Person';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])
    return (
        <div className='row'>
            <div className="col-lg-9 py-4 bg-light">
                <div className="container">
                    <Header></Header>
                    <h3 className='mt-4'>Select today's exercise</h3>
                    <div className="row g-4 py-4">
                       {
                        exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)
                       }
                    </div>
                </div>
            </div>
            <div className="col-lg-3 p-5">
                <Person></Person>
                <Break></Break>
                <ExerciseDetails></ExerciseDetails>
            </div>
        </div>
    );
};

export default Home;