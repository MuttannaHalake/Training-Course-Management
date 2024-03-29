package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Courses;
import com.springrest.springrest.services.CourseService;
@RestController
public class Mycontroller {
	@Autowired
	private CourseService courseservice;
	@GetMapping("/home")
	public String home()
	{
		return "This is home";
	}
	//Get courses
	@GetMapping("/courses")
	public List<Courses> getCourses()
	{
		
		return this.courseservice.getCourses();
	}
	//single course
	@GetMapping("/courses/{courseId}")
	public Courses getCours(@PathVariable String courseId)
	{
		return this.courseservice.getCourse(Long.parseLong(courseId));
	}
	//add course
	@PostMapping("/courses")
	public Courses addCourses(@RequestBody Courses course)
	{
		return this.courseservice.addCourses(course);
	}
	//update
	@PutMapping("/courses")
	public Courses updareCourse(@RequestBody Courses course)
	{
		return this.courseservice.updateCourse(course);
	}
	//Delete course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try {
			this.courseservice.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

}
