import React, { useEffect } from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/navigation';
import nextAuth from 'next-auth';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atoms/modalAtom';




export default function Header() {

  const session = useSession()
  const router = useRouter()
  const [open, setOpen] = useRecoilState(modalState)

  console.log(session)
  if (session.data) {
    console.log(session.data)
  }
  return (<>

    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>

      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}
        <div onClick={() => router.push('/')} className='relative hidden h-24 w-24 lg:inline-grid cursor-pointer'>
          <Image src='https://links.papareact.com/ocw' fill
            objectFit='contain' />
        </div>
        <div className='relative h-10 w-10 cursor-pointer lg:hidden  flex-shrink-0'>
          <Image src='https://links.papareact.com/jjm' fill
            objectFit='contain' />
        </div>

        {/* Middle- Search bar*/}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input
              className=' bg-gray-50 block w-full pl-10 sm:text-sm rounded-md border-gray-300 focus:ring-black focus:border-black   '
              type='text'
              placeholder='search' ></input>
          </div>

        </div>
        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => router.push('/')} className='NavBtn' />
          {session.data ? (<>
            <div className='relative NavBtn'>
              <PaperAirplaneIcon className='NavBtn' />
              <div className='absolute  -top-3 -right-2 bg-red-400 rounded-full h-5 w-5 flex justify-center items-center animate-pulse text-xs'>3

              </div>
            </div>
            <PlusCircleIcon onClick={() => setOpen(true)} className='NavBtn' />
            <UserGroupIcon className='NavBtn' />
            <HeartIcon className='NavBtn' />
            <MenuIcon className='h-6 md:hidden cursor-pointer' />


            <img
              onClick={signOut}
              src={session?.data?.user?.image} alt='ProfilePic'
              className=' h-10 w-10 rounded-full cursor-pointer' />
          </>
          ) : (

            <button className='cursor-pointer' onClick={signIn}>Signin</button>
          )}

        </div>
      </div>

    </div>

  </>
  )
}

