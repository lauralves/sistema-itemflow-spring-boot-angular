package com.example.demo.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@AllArgsConstructor
@Table(name = "FUNCIONARIO")
public class Funcionario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String login;
    private String senha;

    @ManyToOne(optional = false)
    @JoinColumn(name = "TIPO_FUNCIONARIO_ID")
    private Fornecedor fornecedor;

    public Funcionario() {
    }
}
