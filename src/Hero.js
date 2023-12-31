import React from 'react'
import { useGlobalContext } from './context'
import phone from './images/phone.webp'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortunes 500s-use Stripe's software and APIs to accept payments, send payouts, and manage their business online
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phone} className='phone-img' alt="phone"/>
        </article>
      </div>
    </section>
  )
}

export default Hero