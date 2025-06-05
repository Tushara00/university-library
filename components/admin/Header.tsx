import { Session } from 'next-auth'
import React from 'react'

const Header = ({session}: {session:Session}) => {
  return (
   <header>
   <div>
    <h2 className="text-dark-400 font-semibold text-2xl" >{session?.user?.name}</h2>
    <p className='text-base text-slate-500'>Monitor all of your books here</p>
    </div>
   </header>
   
  )
}

export default Header