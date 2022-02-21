import React from 'react'
import Collaboration from '../../components/Collaboration/Collaboration'
import DealAdvantages from '../../components/DealAdvantages/DealAdvantages'
import Statistics from '../../components/Statistics/Statistics'

export default function HomePage() {
    
  return (
    <section className="home">
        <DealAdvantages />
        <Statistics />
        <Collaboration />
    </section>
  )
}
 