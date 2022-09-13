import React from 'react';

const Features = () => {
    return (
        <div className='lg:flex justify-evenly items-center'>
            <div className='grid justify-items-center'>
                <img src="https://i.ibb.co/sRzNKWh/images.jpg" alt="" />
            </div>
            <div>
                <div className='text-center'>
                    <h3 className='text-xl text-purple-500 '>Our Hospital Feature eatures</h3>
                    <p className='text-2xl '>Make An Appointment Easy And Fast Services </p>
                </div>
                <div className='grid lg:grid-cols-2 gap-4 justify-center'>
                    {/* card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Exclusive Supports</h2>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            <div class="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Friendly Environment </h2>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            <div class="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">24 Hours Nurse Support</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Card title!</h2>
                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <div class="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    {/* end card */}
                </div>
            </div>
        </div>
    );
};

export default Features;