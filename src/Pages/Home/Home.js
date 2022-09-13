import React from 'react';

const Home = () => {
    return (
        <div className='bg-#90E2ED flex justify-center bg-slate-300 p-9'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/qM0313m/pic-1.jpg" alt="Album" /></figure>
                <div className='py-9 card-body'>
                    {/* <h2 class="card-title">New album is released!</h2> */}
                    <p className=' text-center text-3xl m-4'>Your <span className='text-secondary'>Health</span> Is Our Top <span className='text-neutral'>Priority</span></p>
                    <div>
                        <h1 className='text-xs from-normal'>There are many variations of passages of lpsum available,</h1>
                        <p className='text-xs font-normal justify-items-start'>but the majority hae suffered.</p>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-wide">Wide</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;