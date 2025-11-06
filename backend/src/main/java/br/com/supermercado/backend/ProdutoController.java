package br.com.supermercado.backend.controller;

import br.com.supermercado.backend.model.Produto;
import br.com.supermercado.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController // 1. Indica que esta classe é um Controller REST
@RequestMapping("/api/produtos") // 2. Todas as rotas aqui dentro começarão com /api/produtos
@CrossOrigin(origins = "http://localhost:4200") // 3. Permite acesso do Angular (que rodará na porta 4200)
public class ProdutoController {

    @Autowired // 4. Injeta a dependência do nosso repositório
    private ProdutoRepository produtoRepository;

    // --- 1. GET (Listar Todos) ---
    // Mapeia para: GET /api/produtos
    @GetMapping
    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    // --- 2. POST (Criar) ---
    // Mapeia para: POST /api/produtos
    @PostMapping
    public Produto createProduto(@RequestBody Produto produto) {
        // @RequestBody converte o JSON do corpo da requisição em um objeto Produto
        return produtoRepository.save(produto);
    }
    
    // --- 3. GET (Buscar por ID) ---
    // Mapeia para: GET /api/produtos/{id} (ex: /api/produtos/1)
    @GetMapping("/{id}")
    public ResponseEntity<Produto> getProdutoById(@PathVariable Long id) {
        // @PathVariable pega o 'id' da URL
        return produtoRepository.findById(id)
                .map(produto -> ResponseEntity.ok().body(produto)) // Se encontrar, retorna 200 OK com o produto
                .orElse(ResponseEntity.notFound().build()); // Se não, retorna 404 Not Found
    }

    // --- 4. PUT (Atualizar por Completo) ---
    // Mapeia para: PUT /api/produtos/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Produto> updateProduto(@PathVariable Long id, @RequestBody Produto produtoDetails) {
        return produtoRepository.findById(id)
                .map(produtoExistente -> {
                    // Atualiza todos os campos do produto existente
                    produtoExistente.setCodigo(produtoDetails.getCodigo());
                    produtoExistente.setDescricao(produtoDetails.getDescricao());
                    produtoExistente.setValor(produtoDetails.getValor());
                    // Salva o produto atualizado
                    Produto produtoAtualizado = produtoRepository.save(produtoExistente);
                    return ResponseEntity.ok().body(produtoAtualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // --- 5. DELETE (Remover) ---
    // Mapeia para: DELETE /api/produtos/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProduto(@PathVariable Long id) {
        return produtoRepository.findById(id)
                .map(produto -> {
                    produtoRepository.delete(produto);
                    return ResponseEntity.ok().build(); // Retorna 200 OK (sem corpo)
                })
                .orElse(ResponseEntity.notFound().build());
    }
    
    // --- 6. PATCH (Atualizar Parcialmente) ---
    // Mapeia para: PATCH /api/produtos/{id}
    @PatchMapping("/{id}")
    public ResponseEntity<Produto> patchProduto(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        return produtoRepository.findById(id)
                .map(produtoExistente -> {
                    
                    // Verificamos campo a campo o que veio no JSON
                    if (updates.containsKey("codigo")) {
                        produtoExistente.setCodigo((Integer) updates.get("codigo"));
                    }
                    if (updates.containsKey("descricao")) {
                        produtoExistente.setDescricao((String) updates.get("descricao"));
                    }
                    if (updates.containsKey("valor")) {
                        // Precisamos converter o valor (que pode vir como String, Integer ou Double)
                        produtoExistente.setValor(new BigDecimal(updates.get("valor").toString()));
                    }

                    Produto produtoAtualizado = produtoRepository.save(produtoExistente);
                    return ResponseEntity.ok().body(produtoAtualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}