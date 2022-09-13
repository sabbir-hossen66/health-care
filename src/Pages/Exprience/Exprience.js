import React from 'react';

const Exprience = () => {
    return (
        <div className='my-9 grid lg:grid-cols-2 sm:grid-cols-1 justify-center items-center'>
            <div className=' ml-6 '>
                <h1 className='text-xl font-semibold text-purple-600'>16+ Years Expriences</h1>
                <p className='text-2xl font-semibold mt-2'>We Are Always ensure Best Medical</p>
                <p className='text-2xl font-semibold'>Treatment For Your Health</p>
                <div className='mt-5'>
                    <span >simply dummy text of the printing and typesetting industry</span>
                    <span>. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                    <span> when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</span>
                </div>
            </div >

            <div className='mr-5 justify-center '>
                <img width={2500} src="https://i.ibb.co/NVbBdFr/profile.jpg" alt="" />
            </div>

        </div >
    );
};

export default Exprience;