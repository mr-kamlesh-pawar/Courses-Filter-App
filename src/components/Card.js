import React, { useState } from "react";
import {FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from "react-toastify";


const Card=(props)=> {
  let course= props.course;
  let likedCourses= props.likedCourses;
  let setLikedCourses=props.setLikedCourses;


  function clickHandler(){

    if(likedCourses.includes(course.id)){
        setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
        toast.warning("Liked Removed");

    }
    else{
        if(likedCourses.length ==0){

            setLikedCourses([course.id]);
        }
        else{

            setLikedCourses((prev)=>[...prev, course.id])
        }
toast.success("Liked Sucessfully")

    }

  }
  return <div className="w-[300px] bg-slate-800 bg-opacity-90 text-white rounded-md overflow-hidden">
<div className="relative">
    <img src={course.image.url} ></img>
    <div className="absolute bottom-[-20px] right-3 ">
    
    <div className="bg-white rounded-full h-[40px] z-40 w-[40px] flex justify-center ">

    <button className="" onClick={clickHandler} > 
        {

            likedCourses.includes(course.id) ? (  <FcLike fontSize="1.75rem"/>) :(  <FcLikePlaceholder fontSize="1.75rem"/>) 
        }
       
         
          </button>
    </div>
</div>

</div>



<div className="p-3">
    <p className="text-white font-bold mt-4"> {course.title}</p>
    <p className="mt-3">
        
{
    course.description.length>100 ?(course.description.substr(0,100) + "...."):(course.description)
}

        
        
        
        </p>
</div>

  </div>;
}

export default Card;
