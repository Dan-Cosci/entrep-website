import React from 'react'
import IngredientCard from '../../components/IngredientCard'
import ImgHandler from '../../utils/ImgHandler'

import './Product.css'
const Product = () => {


  return (
    <div className="products">
      <section className="ingredients">
        <div className="product-text">
          <h1>Ingredients</h1>
          <p>we only choose the freshest ingredients for our products</p>
        </div>
        <div className="ingredient-cards">
          <IngredientCard name="Filipino Spices" img={ImgHandler.ingredients.spices} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
          <IngredientCard name="Chicken" img={ImgHandler.ingredients.chicken} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
          <IngredientCard name="Pork" img={ImgHandler.ingredients.pork} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
          <IngredientCard name="Soy" img={ImgHandler.ingredients.soy} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        </div>
      </section>
    </div>
  )
}

export default Product