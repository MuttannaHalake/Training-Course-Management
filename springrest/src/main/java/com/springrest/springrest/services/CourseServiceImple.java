package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Courses;
@Service
public class CourseServiceImple implements CourseService {
	@Autowired
	private CourseDao coursedao;
	
	//List<Courses> list; This is for before database
	
	public CourseServiceImple()
	{
//		list=new ArrayList<>();
//		list.add(new Courses(123,"Java","This is course"));
//		list.add(new Courses(124,"C++","This is course 2"));

	}

	@Override
	public List<Courses> getCourses() {
		// TODO Auto-generated method stub
		return coursedao.findAll();
	}

	@Override
	public Courses getCourse(long courseId) {
//		Courses c=null;
//		for(Courses course:list)
//		{
//			if(course.getId()==courseId)
//			{
//				c=course;
//				break;
//			}
//		}
		
		return coursedao.getOne(courseId);
	}

	@Override
	public Courses addCourses(Courses course) {
		//list.add(course);
		coursedao.save(course);
		return course;
	}

	@Override
	public Courses updateCourse(Courses course) {
//		list.forEach(e ->
//		{
//			if(e.getId()==course.getId())
//			{
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
         coursedao.save(course);
		
		return course;
	}

	@Override
	public void deleteCourse(long parselong) {
		
		//list=this.list.stream().filter(e ->e.getId()!=parselong).collect(Collectors.toList());
		Courses entity=coursedao.getOne(parselong);
		coursedao.delete(entity);
	}
	
	
	
	
	

}
