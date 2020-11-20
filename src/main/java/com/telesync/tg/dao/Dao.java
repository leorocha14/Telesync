package com.telesync.tg.dao;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.Map;

public interface Dao<T> {
    List<T> listar(List<Integer> ids);
    List<T> listar();
    Map<T, Map<Integer, String>> inserir(String entity) throws JsonProcessingException;
    void alterar(String entity) throws JsonProcessingException;
    void deletar(List<Integer> ids);
    T getUsuarioByLogin(UserDetails userDetails);
}
