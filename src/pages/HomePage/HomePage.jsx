import React, { useEffect, useState } from 'react'
import Slider from '../../components/SliderImg/Slider'
import DataCount from '../../components/DataCount/DataCount';
// import Events from '../Events/OldEvents';
import News from '../News/News';
import SeasonsGreetings from '../SeasonsGreetings/SeasonsGreetings';
// import Programmes from '../Programmes/OLDProgrammes';
import AllComponent from '../Events/AllComponent';
import Programmes from '../Programmes/Programmes';
import UpdatedAC from '../Events/UpdatedAC';
import RSPage from '../ResearchPage/RSPage';


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
    <div className={`${ atTop ? 'mt-6' : 'mt-0'}`}>
      <Slider />

      {/* <Events /> */}
      <div className="">
      {/* <UpdatedAC /> */}
      </div>
      <AllComponent />
      {/* <SeasonsGreetings /> */}
      {/* <News /> */}
      <Programmes />
      <RSPage />
      <div className="xl:px-28 px-4">
        <DataCount />
      </div>
    </div>
  )
}

export default HomePage