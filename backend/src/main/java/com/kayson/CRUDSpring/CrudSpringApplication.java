package com.kayson.CRUDSpring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.kayson.CRUDSpring.course.model.Course;
import com.kayson.CRUDSpring.course.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner testInit(CourseRepository courseRepository) {
		System.out.println("rodou isso");
		return args -> {
			courseRepository.deleteAll();
			Course c = new Course();
			c.setDescription("Curso full stack");
			c.setName("Java + Spring Boot");
			courseRepository.save(c);
		};
	}
}
