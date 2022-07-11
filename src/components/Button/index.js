import React from 'react'

function Button(props) {
  return (
    <button className='bg-cyan-500 text-white hover:text-cyan-500 font-[Poppins] py-2 px-6 rounded  hover:bg-white duration-500'>
      {props.children}
    </button>
  );
}

export default Button;