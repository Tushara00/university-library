import { auth } from '@/auth';
import Header from '@/components/Header'
import React from 'react'
import {ReactNode} from "react"

const Layout = async ({children}: {children: ReactNode}) => {
  const session =await auth();
  return <main className='root-container'>
<div className='mx-auto max-w-7xl'>
    <Header session ={session}/>
<div className="mt-20 pb-20">{children}</div>
</div>
  </main>
}

export default Layout;