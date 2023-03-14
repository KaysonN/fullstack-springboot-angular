package com.kayson.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kayson.backend.model.Course;
import com.kayson.backend.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

	private CourseRepository courseRepository;
	
	@GetMapping
	public List<Course> listCourses(){
		return courseRepository.findAll();
	}
	
}
