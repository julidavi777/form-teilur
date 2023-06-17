import React from 'react';

const Button = ({value,  type}) => {
  return (
    <div className='mt-5 mx-auto lg:w-1/5 sm:w-full' >
        <input className='px-5  w-full  py-3 text-white text-bold rounded-lg bg-indigo-950	hover:bg-indigo-500 font-semibold cursor-pointer mx-auto ' type={type} value={value} />
    </div>
  );
};

export default Button;