import React from 'react';

const Title = ({text, size}) => {
  return (
    <div>
       <h1 className='mb-6 text-center font-semibold capital text-4xl' >{text}</h1>
    </div>
  );
};

export default Title;