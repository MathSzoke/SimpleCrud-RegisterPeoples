package com.MathSzoke.AthenasTest.Service;

import com.MathSzoke.AthenasTest.Models.Pessoa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.MathSzoke.AthenasTest.Repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    public Task task;

    public Pessoa save(Pessoa pessoa) { return this.task.save(pessoa); }

    public Pessoa update(Pessoa pessoa) { return this.task.save(pessoa); }

    public void delete(Long id) { this.task.deleteById(id); }

    public Optional<Pessoa> findById(Long id) { return this.task.findById(id); }

    public List<Pessoa> findAll() { return this.task.findAll(); }

    public List<Pessoa> findByNomeContaining(String nome) {
        return this.task.findByNomeContaining(nome);
    }
}