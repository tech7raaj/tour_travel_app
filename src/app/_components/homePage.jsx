import Dreamgetways from '@/components/dreamgetways/Dreamgetways'
import ExploreHolidays from '@/components/exploreholidays/ExploreHolidays'
import FestivalTours from '@/components/festivaltour/FestivalTours'
import HeroSection from '@/components/herosection/HeroSection'
import MultivisitLocation from '@/components/mostVisit/multivisitLocation'
import SeasonalSojurns from '@/components/seasonalSojurns/SeasonalSojurns'
import SpecialOfferes from '@/components/SpecialOfferes/SpecialOfferes'
import TravelPartner from '@/components/yourtravelpartne/TravelPartener'
import React from 'react'

function HomePage() {
  return (
     <>
     <HeroSection/>
     <MultivisitLocation/>
     <ExploreHolidays/>
     <TravelPartner/>
     <SeasonalSojurns/>
     <Dreamgetways/>
     <SpecialOfferes/>
     <FestivalTours/>
     </>
  )
}

export default HomePage
