package com.kayson.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teste")
public class TesteBackend {

	@GetMapping("/caminhoGet")
	public String teste() {
		
		return "Teste ok";
	}
}
