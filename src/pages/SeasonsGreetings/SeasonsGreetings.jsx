import React from 'react'
import { JanNewYear, Aprilfunction, WasakFunction, AssalaPerahera, MarryCrismistmas, DefultSG } from '../../components/SGData/SGData'

const SeasonsGreetings = () => {
  return (
    <div className="">
        <div className="">
            <JanNewYear />
            <Aprilfunction />
            <WasakFunction />
            <AssalaPerahera />
            <MarryCrismistmas />  
            <DefultSG />
        </div>
        {/* <div className="">
            {
                (() => {
                    if(new Date().getMonth() === 0){
                        return (
                            <JanNewYear />
                        )
                    }
                    else if(new Date().getMonth() === 3){
                        return (
                            <Aprilfunction />
                        )
                    }
                    else if(new Date().getMonth() === 4){
                        return (
                            <WasakFunction />
                        )   
                    }
                    else if(new Date().getMonth() === 7){
                        return (
                            <AssalaPerahera />
                        )
                    }
                    else if(new Date().getMonth() === 11){
                        return (
                            <MarryCrismistmas />
                        )
                    }
                    else{
                        return (
                            <DefultSG />
                        )
                    }
                })()
            }
        </div> */}
    </div>
  )
}

export default SeasonsGreetings