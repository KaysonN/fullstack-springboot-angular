package com.kayson.CRUDSpring.course.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	@GetMapping("/{id}")
	public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
		Optional<Course> course = courseRepository.findById(id);
		if (course.isPresent()) {
			return ResponseEntity.ok(course.get());
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping("/new")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Course createCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course updatedCourse) {
		Optional<Course> course = courseRepository.findById(id);
		if (course.isPresent()) {
			updatedCourse.setId(id);
			courseRepository.save(updatedCourse);
			return ResponseEntity.ok(updatedCourse);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        Optional<Course> course = courseRepository.findById(id);
        if (course.isPresent()) {
            courseRepository.delete(course.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
