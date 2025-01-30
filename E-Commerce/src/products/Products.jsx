import React from 'react'
import './Products.css'
import Card from '../component/Card'
import Input from '../component/Input'

const Products = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  )
}

export default Products