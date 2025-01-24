import React, { useEffect, useState } from 'react'
import Slider from '../../components/SliderImg/Slider'
import DataCount from '../../components/DataCount/DataCount';
import Events from '../Events/Events';
import News from '../News/News';


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
      <div className="md:px-28 px-4">
        <DataCount />
      </div>
      <Events />
      <News />
    </div>
  )
}

export default HomePage