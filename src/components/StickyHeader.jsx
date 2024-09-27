import React from "react";
import { MotionTitle } from "./MotionTitle";
import { Categories } from "./Categories";

export const StickyHeader = ({selectedCateg,setSelectedCateg}) =>{
    
  return (
    <div className="sticky shadow p-2 bg-light">

      <MotionTitle/>
      <Categories selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>

    </div>
  )
}