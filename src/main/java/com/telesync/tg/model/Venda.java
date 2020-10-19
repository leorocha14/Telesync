package com.telesync.tg.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.telesync.tg.type.FormaPagamentoType;
import com.telesync.tg.type.StatusPagamentoType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Table(name = "TVenda")
public class Venda {

    private final static String DATE_FORMAT = "yyyy-MM-dd";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codvenda")
    private Integer codVenda;

    @Column(name = "quantidadechips")
    private int quantidadeChips;

    @Column(name = "dtvenda")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_FORMAT)
    private Date dtVenda;

    @Column(name = "dtvencim")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_FORMAT)
    private Date dtVencimento;

    @Column(name = "valortotal")
    private float valorTotal;

    private String obs;

    @Column(name = "codpagamento")
    private FormaPagamentoType formaPagamento;

    @Column(name = "codstatuspag")
    private StatusPagamentoType statusPagamento;

    @ManyToOne
    @JoinColumn(name = "codcliente")
    private Cliente cliente;
}
