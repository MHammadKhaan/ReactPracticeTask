import React from 'react'
interface ButtonProps{
    title:string
    color?:string // ? mean color prop is optional
    onClick:()=>void
}
export default function Button({title,color='btn-primary',onClick}:ButtonProps) {
    // color='btn-primary default prop is seted here if we did not set prop from component'
  return (
    <div>
      <button onClick={onClick}  type="button" className={`btn ${color}`}>{title} </button>
    </div>
  )
}
