'use client'
import Image from 'next/image'
import Header from './components/Header'
import Feed from './components/Feed'
import Modal from './components/Modal'


export default function Home() {
  return(<div className='bg-gray-100 overflow-y-scroll h-screen scrollbar-hide'>

    <Header/>
    <Feed/>
    <Modal/>
  </div>
  
  )
}
