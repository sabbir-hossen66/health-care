import React from 'react';

const Count = () => {
    return (
        <div className='my-9 flex justify-center justify-evenly sm:640px md:768px lg:1024px'>
            <div class="ml-10 stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-title">Recovered Patients</div>
                    <div class="stat-value text-purple-700">262k+</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Satisfaction Rate</div>
                    <div class="stat-value text-purple-700">96+</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Expert Doctors</div>
                    <div class="stat-value text-purple-700">86+</div>
                </div>

            </div>

            <div className='right sm:text-center'>
                <h1 className='text-secondary text-xl font-semibold'>Meet Our Doctors</h1>
                <div class="avatar-group -space-x-6">
                    <div class="avatar">
                        <div class="w-12">
                            <img src="https://i.ibb.co/ggncbwq/doc-1.jpg" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-12">
                            <img src="https://i.ibb.co/GstCHcL/d-6.jpg" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-12">
                            <img src="https://i.ibb.co/9sMnqpq/d-3.jpg" />
                        </div>
                    </div>
                    <div class="avatar">
                        <div class="w-12">
                            <img src="https://i.ibb.co/3zCKJSv/d-4.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;