import React from 'react'
interface CartProps{
    cartitems:string[]
    onClear:()=>void
}
export default function Cart({cartitems,onClear}: CartProps) {
  return (
    <div>
        <ul>
            {cartitems.map((items)=> <li key={items}>{items}</li>)}
        </ul>
        <button onClick={onClear}>Remove</button>
    </div>
  )
}
