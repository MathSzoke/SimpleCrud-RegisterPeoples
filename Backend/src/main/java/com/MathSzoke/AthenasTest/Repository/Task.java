package com.MathSzoke.AthenasTest.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.MathSzoke.AthenasTest.Models.Pessoa;

import java.util.List;

@Repository
public interface Task extends JpaRepository<Pessoa, Long> {
    @Query("SELECT p FROM Pessoa p WHERE p.nome LIKE %?1%")
    List<Pessoa> findByNomeContaining(String nome);
}
