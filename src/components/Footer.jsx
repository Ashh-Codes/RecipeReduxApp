import React from 'react'

const Footer = () => {
  return (
    <div>
      <div style={{paddingTop:'100px'}} className='container mx-auto px-4'>
      <div className="grid grid-cols-4 items-center">
        <div>
            <h3 className='font-semibold text-lg mb-2'> About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor perspiciatis magnam molestiae molestias reprehenderit ducimus ut. Accusamus autem rerum tempore obcaecati est distinctio fugit, dicta consequatur? Assumenda, a neque.</p>
        </div>
        <div className='text-center'>
            <h3 className='font-semibold text-lg mb-2'>Links</h3>
            <ul>
                <li>About us</li>
                <li>Links</li>
                <li>Blog</li>
                <li>Recipe</li>
            </ul>
        </div>
        <div className='text-center '>
            <h3 className='font-semibold text-lg mb-2'>Links</h3>
            <ul>
                <li>About us</li>
                <li>Links</li>
                <li>Blog</li>
                <li>Recipe</li>
            </ul>
        </div>
        <div className='flex justify-center'>
        <div className='flex align-center space-x-4'>
            
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer
