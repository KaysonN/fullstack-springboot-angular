package com.kayson.CRUDSpring.course.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kayson.CRUDSpring.course.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
