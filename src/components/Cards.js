import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  const courses = props.courses;
  let[likedCourses, setLikedCourses] = useState([]);
  let category = props.category;

  function getCourses() {
if(category == "All"){
    let allCourses = [];

    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });

    return allCourses;
}
else{

    return courses[category];
}

   
  }
  return <div className="flex flex-wrap gap-5 justify-center">
   
   
    {
        getCourses().map((course)=>(
            <Card key={course.id} 
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
            
            />
        )
        
        )
    }
  </div>;
};

export default Cards;
