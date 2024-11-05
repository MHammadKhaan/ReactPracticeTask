import React from 'react'
interface CardProps{
    id:number;
    title: string,
    price: number,
    color: string
}
interface Props{
    card: CardProps[]
}
function Card({card}:Props) {
  return (
    
      <div className='p-4 rounded-2 bg-danger'>
        {card.map((card)=>
        <div key={card.id}>
        <div>{card.title}</div>
        <div>${card.price.toFixed(2)}</div>
        </div>
)}
      </div>
  )
}

export default Card
