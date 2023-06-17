import React from 'react';

const Input = ({id, value, type}) => {
  return (
    <div>
        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' maxLength="256"  type={type} id={id} value={value}/>
    </div>
  );
};

export default Input;