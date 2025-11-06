import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProdutoService } from './produto';
import { Produto } from '../models/produto.model';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080/api/produtos';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoService]
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se não há requisições HTTP pendentes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all produtos', () => {
    const mockProdutos: Produto[] = [
      { id: 1, codigo: 1, descricao: 'Coca Cola', valor: 8.50 },
      { id: 2, codigo: 2, descricao: 'Pão', valor: 5.25 }
    ];

    service.getProdutos().subscribe(produtos => {
      expect(produtos).toEqual(mockProdutos);
      expect(produtos.length).toBe(2);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockProdutos);
  });

  it('should fetch produto by id', () => {
    const mockProduto: Produto = { id: 1, codigo: 1, descricao: 'Coca Cola', valor: 8.50 };

    service.getProdutoById(1).subscribe(produto => {
      expect(produto).toEqual(mockProduto);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProduto);
  });

  it('should create a new produto', () => {
    const newProduto: Produto = { codigo: 3, descricao: 'Leite', valor: 4.75 };
    const createdProduto: Produto = { id: 3, ...newProduto };

    service.createProduto(newProduto).subscribe(produto => {
      expect(produto).toEqual(createdProduto);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newProduto);
    req.flush(createdProduto);
  });

  it('should update a produto', () => {
    const updatedProduto: Produto = { id: 1, codigo: 1, descricao: 'Coca Cola 2L', valor: 9.00 };

    service.updateProduto(1, updatedProduto).subscribe(produto => {
      expect(produto).toEqual(updatedProduto);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedProduto);
    req.flush(updatedProduto);
  });

  it('should delete a produto', () => {
    service.deleteProduto(1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('should partially update a produto', () => {
    const partialUpdate = { valor: 7.99 };
    const updatedProduto: Produto = { id: 1, codigo: 1, descricao: 'Coca Cola', valor: 7.99 };

    service.patchProduto(1, partialUpdate).subscribe(produto => {
      expect(produto).toEqual(updatedProduto);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(partialUpdate);
    req.flush(updatedProduto);
  });
});
