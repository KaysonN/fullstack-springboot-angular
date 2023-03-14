package com.kayson.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kayson.backend.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
	
}
