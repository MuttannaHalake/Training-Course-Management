import React, { useState,useEffect } from "react";

import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "../Api/bootapi";
import axios from "axios";
const Allcourse=()=>
{
    useEffect(()=>{
    document.title="All Courses ||Braincode"
}, []);


//function to call server
const getAllCoursesFromServer=()=>
{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
          //console.log(response);
          console.log(response.data);
          setCourses(response.data);
        },
        (error)=>{
            console.log(error);
        }
    );
};
//calling loading course funtion
     useEffect(()=>{
        getAllCoursesFromServer();
     },[]);
    const [courses,setCourses]=useState([
        // {title:"Java Course",description:"This is for just testing"},
        // {title:"C++ Course",description:"Demo course"},
        // {title:"DSA Course",description:"Data Structure"},
        // {title:"Artificial Intelligent Course",description:"Enroll fast to learn AI"}
        
    ]);
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
               courses.length>0
               ? courses.map((item)=>
                <Course key={item.id} course={item}/>
               ):"No courses"
            }
        </div>

    );
};
export default Allcourse;