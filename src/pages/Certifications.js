import React from 'react'
import CarouselTwo from '../components/CarouselTwo'
import Hero from '../components/Hero'

export default function Certifications(props) {
  return (
    <div>
      <Hero title={props.title} />
      <CarouselTwo />
    </div>
  )
}
