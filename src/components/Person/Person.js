import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profileImg from '../../images/profile.jpg';
import './Person.css';

const Person = () => {
    return (
        <div>
            <div className='d-flex align-items-center gap-3'>
                <div className='w-10'><img src={profileImg} alt="" className='img-fluid rounded-circle'/></div>
                <div>
                    <h4 className='m-0'>Nahid Ibn Ali</h4>
                    <div className='d-flex align-items-center gap-2 text-muted'>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <p className='m-0'>Chuadanga, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-evenly mt-4 bg-light py-3'>
                    <div>
                        <div className='d-flex align-items-center'>
                        <h3 className='m-0'>70</h3><small className='text-muted'>kg</small>
                        </div>
                        <p className='text-muted m-0'>Weight</p>
                    </div>
                    <div>
                        <h3 className='m-0'>5.9</h3>
                        <p className='text-muted m-0'>Height</p>
                    </div>
                    <div>
                        <div className='d-flex align-items-center'>
                        <h3 className='m-0'>23</h3><small className='text-muted'>yrs</small>
                        </div>
                        <p className='text-muted m-0'>Age</p>
                    </div>
                </div>
        </div>
    );
};

export default Person;