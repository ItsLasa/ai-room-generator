'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'

function UserInf() {
    const {user}=useUser();

  return !user ?  (
    <Link href={"/room"} className='bg-blue-500 hover:opacity-90 rounded-lg text-white font-semibold px-5 py-3'>
      Log In
    </Link>
  ) :(
     <UserButton/>
  )
}

export default UserInf