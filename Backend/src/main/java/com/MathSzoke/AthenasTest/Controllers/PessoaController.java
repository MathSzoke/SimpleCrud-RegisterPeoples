package com.MathSzoke.AthenasTest.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.MathSzoke.AthenasTest.Models.*;
import com.MathSzoke.AthenasTest.Service.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {

    @Autowired
    public PessoaService pessoaService;

    @PostMapping
    public Pessoa createPessoa(@RequestBody Pessoa pessoa) {
        return pessoaService.save(pessoa);
    }

    @PutMapping("/{id}")
    public Pessoa updatePessoa(@PathVariable Long id, @RequestBody Pessoa pessoa) {
        pessoa.setId(id);
        return pessoaService.update(pessoa);
    }

    @DeleteMapping("/{id}")
    public void deletePessoa(@PathVariable Long id) {
        pessoaService.delete(id);
    }

    @GetMapping("/{id}")
    public Optional<Pessoa> getPessoa(@PathVariable Long id) {
        return pessoaService.findById(id);
    }

    @GetMapping
    public List<Pessoa> getAllPessoas() {
        return pessoaService.findAll();
    }

    @GetMapping("/search")
    public List<Pessoa> searchPessoas(@RequestParam("nome") String nome) {
        return pessoaService.findByNomeContaining(nome);
    }

    @GetMapping("/{id}/peso-ideal")
    public double getPesoIdeal(@PathVariable Long id) {
        Optional<Pessoa> pessoa = pessoaService.findById(id);
        return pessoa.map(Pessoa::calcularPesoIdeal).orElse(0.0);
    }
}
