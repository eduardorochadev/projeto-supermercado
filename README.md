# 🛒 Sistema de Gestão de Supermercado

<div align="center">

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-brightgreen?style=for-the-badge&logo=spring)
![Angular](https://img.shields.io/badge/Angular-18-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![H2 Database](https://img.shields.io/badge/H2-Database-blue?style=for-the-badge&logo=h2)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)

**Sistema fullstack para gestão de produtos de supermercado com API REST e interface web moderna**

[📋 Funcionalidades](#-funcionalidades) • [🚀 Como executar](#-como-executar) • [🛠️ Tecnologias](#️-tecnologias) • [📊 API](#-documentação-da-api)

</div>

---

## 📋 Funcionalidades

### 🎯 **Backend (API REST)**
- ✅ **CRUD Completo** de produtos
- ✅ **Validação** de dados
- ✅ **Banco H2** em memória para desenvolvimento
- ✅ **Console H2** para visualização dos dados
- ✅ **CORS** configurado para integração com frontend
- ✅ **Testes unitários** implementados

### 🎨 **Frontend (Angular)**
- ✅ **Interface responsiva** moderna
- ✅ **Serviços HTTP** para consumo da API
- ✅ **Modelos TypeScript** tipados
- ✅ **Testes unitários** completos
- ✅ **Roteamento** configurado
- ✅ **Componentes reutilizáveis**

---

## 🚀 Como Executar

### 📋 **Pré-requisitos**
- ☕ **Java 17+**
- 📦 **Node.js 18+**
- 🔧 **Maven 3.6+**
- 🅰️ **Angular CLI 18+**

### 🔄 **Opção 1: Execução Manual**

#### 1️⃣ **Clone o repositório**
```bash
git clone https://github.com/eduardorochadev/projeto-supermercado.git
cd projeto-supermercado
```

#### 2️⃣ **Executar Backend (Terminal 1)**
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
> 🌐 **Backend rodará em**: http://localhost:8080

#### 3️⃣ **Executar Frontend (Terminal 2)**
```bash
cd frontend
npm install
ng serve
```
> 🌐 **Frontend rodará em**: http://localhost:4200

### 🐳 **Opção 2: Docker (Em desenvolvimento)**
```bash
docker-compose up --build
```

---

## 🛠️ Tecnologias

### 🎯 **Backend**
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![Java](https://img.shields.io/badge/Java-17-orange?logo=java) | 17 | Linguagem principal |
| ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.7-brightgreen?logo=spring) | 3.5.7 | Framework web |
| ![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-3.5.7-green?logo=spring) | 3.5.7 | Persistência de dados |
| ![H2 Database](https://img.shields.io/badge/H2-2.3.232-blue?logo=h2) | 2.3.232 | Banco em memória |
| ![Maven](https://img.shields.io/badge/Maven-3.9+-red?logo=apachemaven) | 3.9+ | Gerenciador de dependências |
| ![Lombok](https://img.shields.io/badge/Lombok-1.18-yellow?logo=lombok) | 1.18 | Redução de boilerplate |

### 🎨 **Frontend**
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![Angular](https://img.shields.io/badge/Angular-18-red?logo=angular) | 18 | Framework frontend |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript) | 5.0+ | Linguagem tipada |
| ![RxJS](https://img.shields.io/badge/RxJS-7.8-purple?logo=reactivex) | 7.8 | Programação reativa |
| ![Jasmine](https://img.shields.io/badge/Jasmine-5.1-green?logo=jasmine) | 5.1 | Framework de testes |
| ![Karma](https://img.shields.io/badge/Karma-6.4-lightblue?logo=karma) | 6.4 | Test runner |

### 🔧 **DevOps & Ferramentas**
| Ferramenta | Descrição |
|------------|-----------|
| ![Git](https://img.shields.io/badge/Git-Controle%20de%20versão-orange?logo=git) | Versionamento de código |
| ![Docker](https://img.shields.io/badge/Docker-Containerização-blue?logo=docker) | Containerização da aplicação |
| ![VS Code](https://img.shields.io/badge/VS%20Code-IDE-blue?logo=visualstudiocode) | Ambiente de desenvolvimento |

---

## 📊 Documentação da API

### 🔗 **Base URL**: `http://localhost:8080/api/produtos`

| Método | Endpoint | Descrição | Exemplo |
|--------|----------|-----------|---------|
| 🟢 `GET` | `/` | Lista todos os produtos | `GET /api/produtos` |
| 🟢 `GET` | `/{id}` | Busca produto por ID | `GET /api/produtos/1` |
| 🟡 `POST` | `/` | Cria novo produto | `POST /api/produtos` |
| 🟠 `PUT` | `/{id}` | Atualiza produto completo | `PUT /api/produtos/1` |
| 🔵 `PATCH` | `/{id}` | Atualiza produto parcial | `PATCH /api/produtos/1` |
| 🔴 `DELETE` | `/{id}` | Remove produto | `DELETE /api/produtos/1` |

### 📝 **Modelo de Dados - Produto**
```json
{
  "id": 1,
  "codigo": 123,
  "descricao": "Coca Cola 2L",
  "valor": 8.50
}
```

### 🧪 **Exemplo de Uso**
```bash
# Criar produto
curl -X POST http://localhost:8080/api/produtos \
  -H "Content-Type: application/json" \
  -d '{"codigo": 1, "descricao": "Coca Cola", "valor": 8.50}'

# Listar produtos
curl http://localhost:8080/api/produtos
```

---

## 🧪 Testes

### 🎯 **Backend**
```bash
cd backend
mvn test
```

### 🎨 **Frontend**
```bash
cd frontend
ng test
```

### 📊 **Coverage**
```bash
cd frontend
ng test --code-coverage
```

---

## 🔧 URLs Úteis

| Serviço | URL | Descrição |
|---------|-----|-----------|
| 🎨 **Frontend** | http://localhost:4200 | Interface web |
| 🎯 **Backend API** | http://localhost:8080/api/produtos | API REST |
| 🗄️ **Console H2** | http://localhost:8080/h2-console | Interface do banco |
| 📊 **Testes Frontend** | http://localhost:9876 | Karma test runner |

### 🗄️ **Configuração H2 Console**
- **JDBC URL**: `jdbc:h2:mem:supermercado_db`
- **Username**: `sa`
- **Password**: `password`

---

## 📁 Estrutura do Projeto

```
projeto-supermercado/
├── 📁 backend/                 # API Spring Boot
│   ├── src/main/java/
│   │   └── br/com/supermercado/backend/
│   │       ├── 📄 BackendApplication.java
│   │       ├── 📄 ProdutoController.java
│   │       ├── 📄 ProdutoRepository.java
│   │       └── model/
│   │           └── 📄 Produto.java
│   └── 📄 pom.xml
├── 📁 frontend/                # App Angular
│   ├── src/app/
│   │   ├── models/
│   │   │   └── 📄 produto.model.ts
│   │   ├── services/
│   │   │   ├── 📄 produto.ts
│   │   │   └── 📄 produto.spec.ts
│   │   ├── 📄 app.ts
│   │   └── 📄 app.html
│   └── 📄 package.json
├── 📄 docker-compose.yml       # Configuração Docker
└── 📄 README.md               # Este arquivo
```

---

## 🤝 Contribuição

1. 🍴 **Fork** o projeto
2. 🌟 **Crie** uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. ✅ **Commit** suas mudanças (`git commit -m 'Add: MinhaFeature'`)
4. 📤 **Push** para a branch (`git push origin feature/MinhaFeature`)
5. 📋 **Abra** um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Eduardo Rocha**
- 📧 Email: chicoedumacedo@gmail.com
- 🔗 GitHub: [@eduardorochadev](https://github.com/eduardorochadev)

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela! ⭐**

*Desenvolvido com ❤️ para facilitar a gestão de supermercados*

</div>