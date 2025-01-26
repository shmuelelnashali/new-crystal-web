import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'

export default function Header() {

  return (
  <><div className='flex flex-col max-h-[15vh] px-5'>
    <div className='flex  h-24 justify-between items-center px-4'>
        <Nav/>
        <Logo/>
    </div>
 </div></>
  )
}