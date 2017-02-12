import React from 'react'

import { ParallaxContainer, Parallax } from '../umd/react-gsap-parallax'

export default () => (
  <ParallaxContainer
    scrollDistance={5000}
    scrolljack={{ease: 'Linear', duration: 0.5}}
  >
    {/***********************************************/}
    <Parallax
      keyframes={{
        '0%': {top: '100vh', left: 0, fontSize: '12px'},
        '100%': {top: '0vh', left: 0, fontSize: '36px'}
      }}
    >
      <div style={{background: 'green', width: '100vw', height: 50, opacity: 0.5}}>
        THING!!!!!
      </div>
    </Parallax>
    {/***********************************************/}
    <Parallax
      keyframes={{
        '0%': {top: '100vh', left: 0, fontSize: '12px'},
        '100%': {top: '20vh', left: 0, fontSize: '36px'}
      }}
    >
      <div style={{background: 'green', width: '100vw', height: 50, opacity: 0.5}}>
        THING!!!!!
      </div>
    </Parallax>
    {/***********************************************/}
    <Parallax
      keyframes={{
        '0%': {top: '100vh', left: 0, fontSize: '12px'},
        '100%': {top: '40vh', left: 0, fontSize: '36px'}
      }}
    >
      <div style={{background: 'green', width: '100vw', height: 50, opacity: 0.5}}>
        THING!!!!!
      </div>
    </Parallax>
    {/***********************************************/}
  </ParallaxContainer>
)

