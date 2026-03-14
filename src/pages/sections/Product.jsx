import React from 'react'
import IngredientCard from '../../components/IngredientCard'
import spices from '../../assets/images/ingredients.JPG'
import chicken from '../../assets/images/ingredients2.jpeg'
import pork from '../../assets/images/ingredients3.jpeg'
import soy from '../../assets/images/ingredients4.jpeg'

import {motion } from 'motion/react'

import './Product.css'

const MotionIC = motion.create(IngredientCard)

const Product = () => {


  return (
    <div className="products">
      <section className="ingredients">
        <div className="product-text">
          <h1>Ingredients</h1>
          <p>we only choose the freshest ingredients for our products</p>
        </div>
        <div className="ingredient-cards">
          <MotionIC 
            initial={{opacity:0, y:50}}
            whileInView={{opacity: 1 ,y:0}}
            transition={{duration:1}}
            viewport={{once:true}}
            name="Filipino Spices" img={spices} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
          <MotionIC 
            initial={{opacity:0, y:50}}
            whileInView={{opacity: 1 ,y:0}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            name="Chicken" img={chicken} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
          <MotionIC 
            initial={{opacity:0, y:50}}
            whileInView={{opacity: 1 ,y:0}}
            transition={{duration:1.4}}
            viewport={{once:true}}
            name="Pork" img={pork} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
          <MotionIC 
            initial={{opacity:0, y:50}}
            whileInView={{opacity: 1 ,y:0}}
            transition={{duration:1.6}}
            viewport={{once:true}}
            name="Soy" img={soy} text='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        </div>
      </section>
    </div>
  )
}

export default Product