import React from 'react';

const Break = ({addToSelectedBreak}) => {
    return (
        <div>
            <h4 className='my-4'>Add A Break</h4>
            <div className='d-flex justify-content-evenly bg-light py-3'>
                <button onClick={addToSelectedBreak} className='btn bg-white fw-bold p-3'>10s</button>
                <button onClick={addToSelectedBreak} className='btn bg-white fw-bold p-3'>20s</button>
                <button onClick={addToSelectedBreak} className='btn bg-white fw-bold p-3'>30s</button>
                <button onClick={addToSelectedBreak} className='btn bg-white fw-bold p-3'>40s</button>
            </div>
        </div>
    );
};

export default Break;