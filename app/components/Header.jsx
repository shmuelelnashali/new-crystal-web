import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'

export default function Header() {

  return (
  <><div className='flex flex-col max-h-[15vh] '>
    <div className='flex  h-24 justify-between items-center px-4'>
        <Nav/>
        <Logo/>
    </div>
     

     {/* <div className='h-16 w- full flex justify-center m-2' >

      <Search/>
      </div> */}
 </div></>
  )
}