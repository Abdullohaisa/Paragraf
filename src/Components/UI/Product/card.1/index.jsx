import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'

const CardOne = ({img, title, onClick}) => {

  const mode = useSelector((state) => state.darkMode.mode);

  return (
    <div onClick={onClick} id={mode === false ? "dark":"light"}  className='card-1'>
      <img  src={img}  />
      <p >{title}</p>
    </div>
  )
}

export default CardOne
