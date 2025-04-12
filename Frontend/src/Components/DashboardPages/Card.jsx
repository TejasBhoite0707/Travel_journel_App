import React from 'react'
const Card = ({icon,title,desc,bottomButton,buttonColor}) => {
  return (
    <div className='bg-white rounded-2xl shadow-md p-7 flex flex-col items-center'>
      {icon }
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <p className="text-gray-600 mb-9 text-center">{desc}</p>
      <p className={`${buttonColor} cursor-pointer`}>{bottomButton}</p>
    </div>
  )
}

export default Card
