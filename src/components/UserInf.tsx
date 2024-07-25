'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'

function UserInf() {
    const {user}=useUser();

  return !user ?  (
    <Link href={"/room"} className='bg-blue-500'>
      Log In
    </Link>
  ) :(
     <UserButton/>
  )
}

export default UserInf