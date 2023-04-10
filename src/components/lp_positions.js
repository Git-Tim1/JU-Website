import React, {useEffect, useContext} from 'react'
import Position from './position'
import { Link } from 'react-router-dom'
import { PositionContext } from '../context'

const LP_Positions = () => {
    const positionData = useContext(PositionContext)
    
    return (
    <div className='my-12 inline-block w-full h-auto'>
        <h1 className='font-extrabold text-xl sm:text-2xl'>Positionen</h1>

        <div className='grid grid-cols-1 mt-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                positionData.map((position, index) => {
                    return (
                        <>
                            {
                                (index < 6) && 
                                <Position 
                                    image={position.picture} 
                                    topic={position.topic} 
                                    lp={true}
                                    index={index}
                                />
                            }
                        </>
                    )
                })
            }
        </div>
        <div className='text-center w-full mt-4 inline-block '>
            <Link to="/positionen" >
                <h1 className='
                    px-3 py-1 text-xl
                    bg-accent-blue-2 text-white
                    font-bold
                    inline-block hover:drop-shadow-lg duration-300'>
                        Alle Positionen anzeigen
                </h1>
            </Link>
        </div>
        
    </div>
  )
}

export default LP_Positions