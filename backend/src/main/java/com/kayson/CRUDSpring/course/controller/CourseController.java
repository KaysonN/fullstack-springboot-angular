package com.kayson.CRUDSpring.course.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

	@PostMapping("/new")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Course createCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}
}
