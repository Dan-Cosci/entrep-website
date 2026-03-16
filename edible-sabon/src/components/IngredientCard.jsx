import React, { forwardRef } from 'react'

import './IngredientCard.css'

const IngredientCard = forwardRef(({name, text, img, ...props}, ref) => {
  return (
    <div className="ingredient-card" ref={ref} {...props}>
      <img src={img} alt={name} />
      <div className="text">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
})

export default IngredientCard