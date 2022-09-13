import React from 'react';

const Questions = () => {
    return (
        <div className="my-9 flex justify-evenly items-center">
            <div>
                <h3 className='text-xl text-purple-600 font-semibold'>FAQ Questions</h3>
                <p className='text-2xl'>Get Your General Answer</p>
                <p>Will I always see my own doctor?__________<span className='text-purple-700 font-semibold'>+</span>  </p>
                <p>What is one Medical’s care?________________<span className='text-purple-700 font-semibold'>+</span></p>
                <p>What is evidence based medicine?_________<span className='text-purple-700 font-semibold'>+</span></p>
                <p>What is an academic medical center?______<span className='text-purple-700 font-semibold'>+</span></p>

            </div>
            <div>
                <img width={200} src="https://i.ibb.co/BLtL3h2/np.png" alt="" />
            </div>
        </div>
    );
};

export default Questions;