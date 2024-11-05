import React, { MouseEvent, useState } from "react";
interface ListGroupProps{
  items:string[]
  heading:string
  onSelected:(item:string)=>void
}
export default function ListGroup({items,heading,onSelected}:ListGroupProps) {
  const [selectedindex, setSelectedIndex]=useState(-1)
  
  // items=[]
  const message = items.length == 0 && <p>No Data Found</p>;
  // const handleClick=(event:MouseEvent)  =>{
  //   console.log(event.target)
  // }
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {message}
        {items.map((item,index) => (
          <li
            className={selectedindex==index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={()=>{setSelectedIndex(index)
              onSelected(item)
            
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
