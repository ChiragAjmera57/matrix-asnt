import React from 'react'
import bitLogo from '../../Asset/BitLogo.png'
import Image from 'next/image'
export const TokenCard = () => {
  return (
    <div className='border-4
    border-customGolden rounded-xl p-8 mx-3 mt-2 max-w-fit bg-black text-white'>
       <div className='mb-7'>
           <Image src={bitLogo} alt='logo' />

       </div>
       <p className='mb-2'>Bitcoin</p>
       <table className='table-auto p-5'>
               <tbody>
                   <tr className='mb-2 '>
                       <td className='font-extralight'>Symbol</td>
                       <td className='font-extralight'>Btc</td>
                   </tr>
                   <tr className='mb-2'>
                       <td className='font-extralight'>Decimal</td>
                       <td className='font-extralight'>Btc</td>
                   </tr>
                   <tr  className='mb-2'>
                       <td className='font-extralight'>Market cap</td>
                       <td className='font-extralight'>Btc</td>
                   </tr>
                   <tr>
                       <td className='font-extralight'>Chain</td>
                       <td className='font-extralight'>Bitcoin</td>
                   </tr>
               </tbody>
       </table>
       <button className='mx-6 mt-2 rounded-full text-sm  p-1 text-center  bg-customGolden'>
           <div className='border-2 text-black font-bold text-sm px-5 py-1 border-white rounded-full '>
               <p>Details </p>
           </div>
       </button>
   </div>
  )
}
