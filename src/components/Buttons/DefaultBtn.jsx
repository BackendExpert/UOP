import React from 'react'

const DefaultBtn = ({type, btnvalue, onClick }) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className='py-1 px-4 rounded bg-[#560606] text-white'
    >
        {btnvalue}
    </button>
  )
}

export default DefaultBtn