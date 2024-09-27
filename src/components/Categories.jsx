import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { allCategories } from "./utils";
import { useEffect } from "react";
import { data } from "./data";
import { useState } from "react";

export const Categories = ({setSelectedCateg,selectedCateg}) =>{
    

    



    
    
  return (
    <div className="d-flex justify-content-center">
    <ListGroup horizontal>

    {allCategories().map(item=>
        <ListGroupItem className={selectedCateg == item ? "categ bg-warning text-light" : "categ bg-light text-warning"} onClick={()=>setSelectedCateg(item)} key={item}>{item}</ListGroupItem>
    )}




    
    

    </ListGroup>
      
    </div>
  )
}
