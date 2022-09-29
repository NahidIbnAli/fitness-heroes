import React from 'react';

const Break = () => {
    return (
        <div>
            <h4 className='my-4'>Add A Break</h4>
            <div className='d-flex justify-content-evenly bg-light py-3'>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'><span>10</span>s</button>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'><span>20</span>s</button>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'><span>30</span>s</button>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'><span>40</span>s</button>
            </div>
        </div>
    );
};

export default Break;