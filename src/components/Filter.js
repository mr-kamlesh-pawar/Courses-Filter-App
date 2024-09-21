import React from "react";
import Card from "./Card";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let  setCategory= props.setCategory;
function filterHandler(title){
    setCategory(title);

}

  return (
    <div className=" h-28 flex justify-center place-items-center w-[100%] gap-6 text-white  ">
     
     <div className=" h-14 w-[40%] flex mx-auto justify-between">
        {
     filterData.map((data) => (
       <button key={data.id} className={`bg-slate-600 text-sm font-bold h-10 w-28 rounded-md
        ${category == data.title ? "border border-white bg-slate-950": "bg-opacity-70 bg-slate-900"}
        hover:bg-slate-900 transition-all duration-200`}
       onClick={()=> filterHandler( data.title)}
       >  {data.title} </button>
       
        
        
    ))}
        
        </div> 
    
    </div>
  );
};

export default Filter;
