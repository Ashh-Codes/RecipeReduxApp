import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/recipeSlice'

const Header = ({insideHome}) => {
    const dispatch = useDispatch()
  return (
  
    <nav className='flex w-full bg-pink-700 fixed top-0 p-3 items-center' style={{height:'80px'}}>
        <Link to={'/'} className='text-white font-bold text-2xl ms-3'>  <i className="fa-solid fa-bowl-rice me-2"></i>EasyRecipe</Link>
        {
            insideHome&&
            <div className='flex-1 text-right'>
            <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px',height:'40px'}} className='rounded p-2' type="text" placeholder='search Recipe here...' />
        </div>
        }
    </nav>
   

  )
}

export default Header
