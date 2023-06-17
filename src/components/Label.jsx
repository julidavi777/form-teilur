import React from 'react';

const Label = ({label, id}) => {
  return (
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-blue'  htmlFor={id}>{label}</label>
  );
};

export default Label;