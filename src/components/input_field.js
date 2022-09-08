import React from 'react'

const InputField = ({datapoint, type, inputData }) => {
  return (
    <div>
        <label className='font-semibold text-lg mt-3 inline-block'>{datapoint}</label>
        <input type={type} onChange={inputDataValue => inputData(inputDataValue.target.value)} className='w-full mt-1 h-10 border border-gray-10 bg-white px-3 focus:outline-none focus:border-accent-blue-2' required />
    </div>
  )
}

export default InputField