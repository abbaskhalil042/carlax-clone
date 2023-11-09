import React from 'react'
import "../styles/TriangleShape.css"

const TriangleShape = ({className}) => {
  return (
    <div className={`triangle-shape ${className}`}>
        <div className="shape"></div>
    </div>
  )
}

export default TriangleShape