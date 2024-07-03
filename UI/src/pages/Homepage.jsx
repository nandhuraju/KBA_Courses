import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CourseCards from '../components/CourseCards'
import CourseButton from '../components/CourseButton'

const Homepage = () => {
  return (
    <>
        
        <Hero/>
        <CourseCards isHome= {true}/>
        <CourseButton/>
    </>
  )
}

export default Homepage