import React from 'react';

const Blog = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center'>Questions & Answers</h2>
            <div className="row mt-1 g-4">
                <div className='col-12'>
                    <div className="card rounded-0">
                        <div className="card-body text-center">
                            <h4 className="card-title">How does react work?</h4>
                             <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React finds out what changes have been made, and changes only what needs to be changed.</p>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className="card rounded-0">
                        <div className="card-body text-center">
                            <h4 className="card-title">What is the difference between state and props?</h4>
                             <p>Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.</p>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className="card rounded-0">
                        <div className="card-body text-center">
                            <h4 className="card-title">What is the use of useEffect other than fetching data?</h4>
                             <p> By using useEffect Hook, we tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;