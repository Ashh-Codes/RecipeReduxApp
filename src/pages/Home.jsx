import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'
import Header from '../components/Header'


const Home = () => {
    const dispatch =useDispatch()

    const [currentPage,setcurrentPage] =useState(1)
    const productsPerPage = 8
   
   const {allRecipes,loading,error} = useSelector(state=>state.recipeReducer)
   // console.log(allRecipes);
   const totalNoPages = Math.ceil(allRecipes?.length/productsPerPage)
    const currentPageLastRecipeIndex = currentPage * productsPerPage
    const currentPageFirstRecipeIndex = currentPageLastRecipeIndex - productsPerPage
    const allvisibleRecipes = allRecipes?.slice(currentPageFirstRecipeIndex,currentPageLastRecipeIndex)
    
    useEffect(()=>{
        dispatch(fetchAllRecipes())
    },[])

    const navigateToNextPage =()=>{
        if(currentPage!=totalNoPages){
            setcurrentPage(currentPage+1)
        }
    }
    const navigateToPreviousPage =()=>{
        if(currentPage!=1){
            setcurrentPage(currentPage-1)
        }
    }

  return (
    <>
     <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container mx-auto px-4'>
        <div className="flex justify-center items-center my-8">
            <div className="grid grid-cols-2 items-center">
                <div className='border p-2 rounded me-5'>
                <img style={{width:'600px',height:'500px'}} src="https://theforkedspoon.com/wp-content/uploads/2022/11/Easy-Broccoli-Cheese-Soup-30.jpg" alt="" />
                </div>
                <div >
                    <div className='font-bold text-3xl mb-10'>Explore your Authentic taste...</div>
                    <p className='text-lg'>
                    We have hundreds of vegetarian recipes shared in this span of 11 years and is one of the largest collection of pure Indian vegetarian recipes which have been tried and tested and presented with step by step photos.The recipes are also shared with many tips and suggestions so that it is easier for anyone to make them easily.
                    </p>
                </div>
            </div>
        </div>
        <h1 className='text-center font-bold text-3xl my-5'>Recipies</h1>

       {
        loading  ?
        <div style={{height:'100vh'}} className="flex justify-center items-center font-bold">
            <img width={'90px'} height={'90px'} src="https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif" alt="" className='me-4'/>
        </div>
        :
        <>
         <div className='grid grid-cols-4 gap-4'>
        {
            allRecipes.length>0?
            allvisibleRecipes?.map(recipe=>(
                <div key={recipe?.id} className="rounded border p-2 shadow">
            <img style={{width:'100%',height:'300px'}} src={recipe?.image} alt="" />
            <div className='text-center'>
            <h2 className='my-2'>{recipe?.name}</h2>
            <Link className='bg-red-600 p-2 rounded text-white inline-block' to={`/${recipe?.id}/recipe`}>View More</Link>
            </div>
        </div>
            ))
            :
            <div className='font-bold text-center my-5 text-red-600'>
                Recipe not found
            </div>
        }
        
         </div>
        <div className="flex justify-center items-center my-5">
            <span onClick={navigateToPreviousPage} style={{cursor:'pointer'}}><i className='fa-solid fa-backward me-5'></i></span>
            <span>{currentPage} of {totalNoPages}</span>
            <span onClick={navigateToNextPage} style={{cursor:'pointer'}}><i className='fa-solid fa-forward ms-5'></i></span>
        </div>
        
        </>

       }
    </div>
    </>
  )
}

export default Home
