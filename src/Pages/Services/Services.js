import React from 'react';

const Services = () => {
    return (
        <div>
            <h2 className='text-center mt-8 text-xl text-purple-600 font-semibold'>Our Services</h2>
            <h1 className='text-center mt-2
            text-2xl font-semibold'>Services For Your Health</h1>

            <div className='py-3 grid lg:grid-cols-2 gap-4  justify-self-center'>
                <div class="ml-7 mt-6 card w-96 bg-base-100 shadow-xl ">
                    <div class="card-body">
                        <div class="card-actions justify-end">
                            <button class="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <h1 className='text-xl font-semibold '>Cardiology</h1>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <button className='bg-accent'>Explore now</button>
                    </div>
                </div>

                <div class="ml-7 mt-6 card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-end">
                            <button class="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <h1 className='text-xl font-semibold'>Monthly Check Up</h1>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <button className='bg-accent'>Explore now</button>
                    </div>
                </div>
                <div class="ml-7 mt-6 card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-end">
                            <button class="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <h1 className='text-xl font-semibold'>Dental Care</h1>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <button className='bg-accent'>Explore now</button>
                    </div>
                </div>
                <div class="ml-7 mt-6 card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-end">
                            <button class="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <h1 className='text-xl font-semibold'>Opthalmology</h1>
                        <p>Seduahag perspiciati under omnised atused error.</p>
                        <button className='bg-accent'>Explore now</button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Services;