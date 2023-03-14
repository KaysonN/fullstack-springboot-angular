package com.kayson.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.kayson.backend.model.Course;
import com.kayson.backend.repository.CourseRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("hello world ");
	}

	@Bean
	CommandLineRunner init(CourseRepository repository) {
		return args ->{
			repository.deleteAll();
			
			Course c = new Course();
			c.setName("Java");
			c.setDescription("kkkk");
			repository.save(c);
		};
	}
}
