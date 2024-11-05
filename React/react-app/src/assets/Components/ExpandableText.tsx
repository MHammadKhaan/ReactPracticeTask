import React, { useState } from "react";
interface ExpandableTextProps {
    children:string
    maxtext?:number
}
export default function ExpandableText({children,maxtext=100}:ExpandableTextProps) {
  const [isExpanded,setExpanded]=useState(false)
    if(children.length<=maxtext)return(<p>{children}</p>)
    console.log(maxtext);
    const text=isExpanded? children:children.substring(0,maxtext)
    return(<p>{text}...<button onClick={()=>setExpanded(!isExpanded)}>{isExpanded?"less":"More"}</button></p>)
    
    //Practice

}
