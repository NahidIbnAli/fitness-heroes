import React from 'react';

const Break = () => {
    return (
        <div>
            <h4 className='my-4'>Add A Break</h4>
            <div className='d-flex justify-content-evenly bg-light py-3'>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'>10s</button>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'>20s</button>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'>30s</button>
                <button className='btn bg-white fw-bold p-3 m-0 rounded-circle'>40s</button>
            </div>
        </div>
    );
};

export default Break;