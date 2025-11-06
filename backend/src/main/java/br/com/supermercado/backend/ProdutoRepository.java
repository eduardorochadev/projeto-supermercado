package br.com.supermercado.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.supermercado.backend.model.Produto;

@Repository 
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
