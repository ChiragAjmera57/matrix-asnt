import Image from 'next/image'
import React from 'react'
import vectorLine from "../../Asset/VectorLineYellow.png";
import bitLogo from '../../Asset/BitLogo.png'
import { TokenCard } from './TokenCard';

export const Ourtoken = () => {
  return (
    <div className='w-2/3 m-auto'>
        <div className='heading text-center '>
            <p className='text-5xl font-Kanit font-extrabold '>Our <span className='text-customYellow relative '>Token</span></p>
            <Image className='absolute  mr-auto ml-auto right-0 left-32' src={vectorLine} alt="Picture of the author" />
            <p className='font-Inter mt-6 text-xl font-medium' >Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
        </div>
        <div className='main flex flex-wrap mt-8 m-auto'>
        <TokenCard />
        <TokenCard />
        <TokenCard />
        <TokenCard />
        <TokenCard />
        </div>
        <div className='bottom'></div>
    </div>
  )
}
