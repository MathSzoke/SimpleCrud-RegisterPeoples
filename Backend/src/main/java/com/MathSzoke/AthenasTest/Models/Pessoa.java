package com.MathSzoke.AthenasTest.Models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Pessoa", schema = "Athenas")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Nome", nullable = false)
    private String nome;

    @Column(name = "Data_Nasc", nullable = false)

    private LocalDate dataNasc;

    @Column(name = "CPF", unique = true, nullable = false)
    private String cpf;

    @Column(name = "Sexo", length = 1, nullable = false)
    private char sexo;

    @Column(name = "Altura", nullable = false)
    private Double altura;

    @Column(name = "Peso", nullable = false)
    private Double peso;

    // Construtores, getters e setters

    public Pessoa() {
    }

    public Pessoa(String nome, LocalDate dataNasc, String cpf, char sexo, Double altura, Double peso) {
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.cpf = cpf;
        this.sexo = sexo;
        this.altura = altura;
        this.peso = peso;
    }

    // Getters e setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(LocalDate dataNasc) {
        this.dataNasc = dataNasc;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }

    public Double getAltura() {
        return altura;
    }

    public void setAltura(Double altura) {
        this.altura = altura;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    // Método para calcular o peso ideal

    public double calcularPesoIdeal() {
        if (sexo == 'M') {
            return (72.7 * altura) - 58;
        } else if (sexo == 'F') {
            return (62.1 * altura) - 44.7;
        }
        return 0;
    }
}
