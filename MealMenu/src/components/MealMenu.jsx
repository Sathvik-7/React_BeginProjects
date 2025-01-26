import React from 'react'
import '../style.css'
import axios from "axios"
import { useState , useEffect } from 'react'
const MealMenu = () => {

  const [items , setItems] = useState([])

  useEffect(()=>
    {
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => { setItems(res.data.meals) })
      .catch((error) =>  console.log(error))
    },[])

    const itemList = items.map(({strMeal,strMealThumb,idMeal})=>
                                  {
                                    return (
                                      <section className="card" key={idMeal}>
                                        <img src={strMealThumb} alt={strMeal} />
                                        <section className="content">
                                          <p>{strMeal}</p>
                                          <p>${idMeal}</p>
                                        </section>
                                      </section>
                                    )
                                  })

  return (
    <div className="items-container">
      {itemList}
    </div>
  )
}

export default MealMenu