import React from 'react';

const ExerciseDetails = ({exercises, selectedBreak}) => {
    let total = 0;
    for(const exercise of exercises) {
        total+= exercise.time
    }
    return (
        <div className='py-5'>
            <h4 className='my-4'>Exercise Details</h4>
            <div className="d-flex justify-content-between align-items-center bg-light p-4">
                <h5 className='m-0'>Exercise time</h5>
                <p className='fs-5 text-muted m-0'>{total} seconds</p>
            </div>
            <div className="d-flex justify-content-between align-items-center bg-light p-4 my-4">
                <h5 className='m-0'>Break time</h5>
                <p className='fs-5 text-muted m-0'>{selectedBreak}</p>
            </div>
            <button className='btn btn-lg btn-warning w-100 mt-5 rounded-0'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;