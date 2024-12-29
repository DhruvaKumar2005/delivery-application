import React from 'react'
import { House } from 'lucide-react'
import { Search } from 'lucide-react'
import { NotepadText } from 'lucide-react'
import { Bell } from 'lucide-react'

const BottomNavbar = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full flex justify-around bg-[#128983] text-white py-6 rounded-t-xl'>
        <House />
        <Search />
        <NotepadText />
        <Bell />
    </div>
  )
}

export default BottomNavbar
