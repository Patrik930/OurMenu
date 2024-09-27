import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { data } from "./data";



export const Menus = ({selectedCateg}) =>{
    console.log(selectedCateg);
    const [menus,setMenu] = useState(null)
        ///console.log(allCategories());
        
        useEffect(()=>{
          setMenu(selectedCateg=='all' ? data : data.filter(obj=>obj.category == selectedCateg))
      },[selectedCateg])

      menus && console.log(menus);
    
  
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {menus && menus.map(obj=>
         <div className="card lg:card-side d-flex col-md-3" style={{backgroundColor:"#f0d90e"}} >
         <figure>
           <img width="200"
             src={'images/' + obj.img}
             alt={obj.title} />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{obj.title}</h2>
           <p>{obj.desc}</p>
           <div className="card-actions justify-end">
             <button className=" btn btn-primary">{obj.price}</button>
           </div>
         </div>
       </div>
      )}
    </div>
  )
}
