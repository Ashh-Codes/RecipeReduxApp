import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Recipe = () => {
    const [recipe,setrecipe] = useState({})
    const {id} =useParams()
    console.log(id);

    useEffect(()=>{
        if(sessionStorage.getItem("allRecipes")){
            const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
            setrecipe(allRecipes.find(item=>item.id==id))
        }
    },[])
    console.log(recipe);
    
    
  return (
    <>
     <Header/>
    <div style={{paddingTop:'100px'}} className='container mx-auto px-4'>
    <div className="flex justify-center items-center my-8">
            <div className="grid grid-cols-2 items-center">
                <div className='border p-2 rounded me-5'>
                <img style={{width:'600px',height:'500px'}} src={recipe?.image} alt="" />
                </div>
                <div >
                    <h3 >Recipe Id: {recipe?.id}</h3>
                    <h1 className='text-3xl font-bold my-3'>{recipe?.name}</h1>
                    <h2 className='mb-3'><span className='font-semibold my-3'>Cuisine</span> :{recipe?.cuisine}</h2>
                    <p><span className='font-semibold me-2'>Ingredients</span>: {recipe?.ingredients}</p>

                    <p className='mt-3'><span className='font-semibold me-2'>Instructions</span>:{recipe?.instructions}</p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Recipe
