import React from 'react';

const Testmonial = () => {
    return (
        <div>
            <div className=''>
                <h2 className='text-xl justify-center  text-center text-purple-600'>Testimonial</h2>
                <p className='text-2xl font-semibold justify-center  text-center'>What they say?</p>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-9 justify-center items-center'>
                    <div className='ml-6'>
                        <h2 className='font-semibold'>David Jeams</h2>
                        <p className='font-semibold'>Pratient</p>
                        <div>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi molestiae non excepturi illo pariatur accusamus! Impedit enim adipisci maiores numquam soluta quam, ad consequuntur molestias aliquid, eligendi, veritatis consectetur.</p>
                        </div>
                    </div>
                    <div className="right">
                        <img width={1500} src="https://i.ibb.co/fFMtsLf/can.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;