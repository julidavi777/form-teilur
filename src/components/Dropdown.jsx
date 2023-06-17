import React ,{ useState }  from "react";

const dropdown = ({ options, name}) => {
    const [selectedOption, setSelectedOption] = useState(''); 
    const [showTextbox, setShowTextbox] = useState(false); 

    const handleChange =(e)=>{
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue)
       

        selectedValue !== 'otro'?setShowTextbox(false):setShowTextbox(true)

    }
  return (
    <div>
      <select name={name}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedOption} onChange={handleChange} >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {showTextbox && selectedOption === 'otro' &&(
        <div>
            <label htmlFor="textbox">Especifica tu área de experiencia</label>
            <input type="text" id="textbox" />
        </div>
      )}
    </div>
  );
  
};
export default dropdown;
