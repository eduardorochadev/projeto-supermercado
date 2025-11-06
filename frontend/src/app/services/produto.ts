// Cole isto dentro de 'produto.ts'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model'; // Importe nosso model!

@Injectable({
  providedIn: 'root'
})
export class ProdutoService { // Vou chamar a classe de ProdutoService, mesmo que o arquivo seja produto.ts

  // A URL base da nossa API Spring Boot
  private apiUrl = 'http://localhost:8080/api/produtos';

  // Injeta o HttpClient para que possamos usá-lo
  constructor(private http: HttpClient) { }

  // --- Nossos 5 métodos do CRUD ---

  // GET (Listar Todos)
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // GET (Buscar por ID)
  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // POST (Criar)
  createProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // PUT (Atualizar Completo)
  updateProduto(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  // PATCH (Atualizar Parcial)
  patchProduto(id: number, updates: Partial<Produto>): Observable<Produto> {
    return this.http.patch<Produto>(`${this.apiUrl}/${id}`, updates);
  }

  // DELETE (Remover)
  deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}