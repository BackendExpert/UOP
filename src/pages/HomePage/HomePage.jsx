import React, { useEffect, useState } from 'react'
import Slider from '../../components/SliderImg/Slider'

const HomePage = () => {
      const [atTop, setAtTop] = useState(true);
      const checkScroll = () => {
          if (window.scrollY === 0) {
              setAtTop(true);
          } else {
              setAtTop(false);
          }
      };
      
      useEffect(() => {
          window.addEventListener('scroll', checkScroll);
          return () => {
              window.removeEventListener('scroll', checkScroll);
          };
      }, []);
  return (
    <div className={`${ atTop ? 'mt-12' : 'mt-0'}`}>
      <Slider />
    </div>
  )
}

export default HomePage