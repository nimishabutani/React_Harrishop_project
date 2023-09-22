import React from 'react'
import Navbar from '../../Componants/Navbar'
import Section1 from './section1/Section1'
import ProductCorousol from './ProductCorousol/ProductCorousol'
import Dealticketlist from './DealOfthedaySection/Dealticketlist'
import Apple_add from './Apple_Add_section/Apple_add'
import Feature_area from './Features_area_section/Feature_area'
import Subscribe from './Subscribe_section/Subscribe'
import Footer from '../../Componants/Footer/Footer'
import { Link, Outlet } from 'react-router-dom'
import PopularProductCard_top from './PopularProductSection/PopularProductCard_top'



const Homepage = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <ProductCorousol />
      <div className='container-2xl px-32   w-full   mt-20  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  xs:grid-cols-1 '>
        <div className=' w-full h-auto border-0 border-l-4 border-custom-pink   '>
          <h1 className='text-3xl font-bold ps-3  '>Popular Products</h1>
        </div>
        <div className=' w-full   sm:mt-10 xs:mt-10 md:mt-0 lg:ps-56 '>
          <ul className='text-gray-700 font font-semibold flex  '>
            <Link to='/' className=' px-2 me-10 border-0 border-b-4 border-custom-pink' >Top Rated</Link>
            <Link to='Bestselling' className='px-2 me-10 border-0 border-b-4 border-custom-pink' >Best Selling</Link>
            <Link to='Latestproduct' className='px-2  border-0 border-b-4 border-custom-pink' >Latest Product</Link>
          </ul>
          <Outlet/>
        </div>
      </div>
      
       <PopularProductCard_top/>
      
      <div className=' xs:px-0 md:px-32 mt-32  w-full  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  xs:grid-cols-1'>
        <div className=' w-full h-auto border-0 border-l-4 border-custom-pink   '>
          <h1 className='text-3xl font-bold ps-3  '>Deal Of The Day</h1>
        </div>
        <div className=' w-full h-auto  sm:mt-10 xs:mt-10 md:mt-0 lg:ps-96 '>
          <button className='px-12 bg-custom-pink h-10 font-bold text-white hover:bg-[#6364db] hover:duration-500'>View All Products</button>
        </div>

      </div>
      <div className='container-2xl h-auto xs:px-0 md:px-32 pt-10 grid lg:grid-cols-2  md:grid-cols-1  sm:grid-cols-1  xs:grid-cols-1 gap-7'>
        <Dealticketlist />
      </div>

      <div className='container-2xl h-auto col-span-12 xs:px-0 md:px-32 pt-20 pb-20'>
        <Apple_add />
      </div>

      <div className='container-2xl h-auto xs:px-0 md:px-32  pb-20'>
        <Feature_area />
      </div>

      <div className='container-2xl  h-auto '>
        <Subscribe />
      </div>
      <Footer />
    </>



  )
}

export default Homepage
