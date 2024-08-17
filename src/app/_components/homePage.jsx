import ExploreHolidays from '@/components/exploreholidays/ExploreHolidays'
import HeroSection from '@/components/herosection/HeroSection'
import MultivisitLocation from '@/components/mostVisit/multivisitLocation'
import React from 'react'

function HomePage() {
  return (
     <>
     <HeroSection/>
     <MultivisitLocation/>
     <ExploreHolidays/>
     </>
  )
}

export default HomePage
