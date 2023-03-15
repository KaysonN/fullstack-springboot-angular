package com.kayson.CRUDSpring.course.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kayson.CRUDSpring.course.model.Course;
import com.kayson.CRUDSpring.course.repository.CourseRepository;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

	@Autowired
	private CourseRepository courseRepository;
	
	@GetMapping("/list")
	public List<Course> getCourses() {
		return courseRepository.findAll();
	}
	
	@GetMapping("/{id}/course")
	public Optional<Course> getCourse(@PathVariable Long id) {
		return courseRepository.findById(id);
	}
	
	
}
