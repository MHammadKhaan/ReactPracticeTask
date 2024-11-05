import React from 'react'
interface NavProps {
    cartitemsCount:number
}
export default function NavBar({cartitemsCount}: NavProps) {
  return (
    <div>
      NavBar {cartitemsCount}
    </div>
  )
}
