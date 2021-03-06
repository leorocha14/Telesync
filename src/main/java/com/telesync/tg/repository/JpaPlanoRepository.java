package com.telesync.tg.repository;

import com.telesync.tg.entity.Plano;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaPlanoRepository extends JpaRepository<Plano, Integer> {
}
