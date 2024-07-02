package com.MathSzoke.AthenasTest.DTOs;

public class PessoaDTO {

    private Long id;
    private String nome;
    private int idade;
    private double altura;
    private String sexo;

    // Getters e Setters

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

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public String getSexo() {
        if("M".equalsIgnoreCase(sexo) || "F".equalsIgnoreCase(sexo)) return sexo;
        else throw new IllegalArgumentException("Sexo inválido");
    }

    public void setSexo(String sexo) {
        if("M".equalsIgnoreCase(sexo) || "F".equalsIgnoreCase(sexo)) this.sexo = sexo;
        else throw new IllegalArgumentException("Sexo inválido");
    }
}
