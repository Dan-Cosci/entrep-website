import React from 'react'

import './IngredientCard.css'

const IngredientCard = ({name, text, img}) => {
  return (
    <div className="ingredient-card">
      <img src={img} alt={name} />
      <div className="text">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default IngredientCard