import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Header from '../Header/Header';
import Person from '../Person/Person';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [exercisesData, setExercisesData] = useState([]);
    const [selectedBreak, setSelectedBreak] = useState(0);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])
    useEffect(() => {
        const storedBreakTime = localStorage.getItem('breakTime');
        setSelectedBreak(storedBreakTime)
    }, [])
    const handleAddToExerciseDetails = exercise => {
        const newExercises = [...exercisesData, exercise]
        setExercisesData(newExercises);
    }
    const addToSelectedBreak = breakTime => {
        setSelectedBreak(breakTime.target.innerText);
        localStorage.setItem('breakTime', breakTime.target.innerText);
    }
    return (
        <div className='row'>
            <div className="col-lg-9 py-4 bg-light">
                <div className="container">
                    <Header></Header>
                    <h3 className='mt-4'>Select today's exercise</h3>
                    <div className="row g-4 py-4">
                       {
                        exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id} handleAddToExerciseDetails={handleAddToExerciseDetails}></Exercise>)
                       }
                    </div>
                </div>
            </div>
            <div className="col-lg-3 p-5">
                <Person></Person>
                <Break addToSelectedBreak={addToSelectedBreak}></Break>
                <ExerciseDetails exercises={exercisesData} selectedBreak={selectedBreak}></ExerciseDetails>
            </div>
        </div>
    );
};

export default Home;