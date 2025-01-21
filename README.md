# CRUD de E-commerce de Games

Este projeto implementa um sistema CRUD para um e-commerce de games, com funcionalidades relacionadas a produtos e categorias. A aplicação foi desenvolvida com foco em boas práticas de organização e escalabilidade.

## Estrutura das Tabelas

O projeto possui duas entidades principais relacionadas:

### Produtos
- Representa os jogos disponíveis no e-commerce.
- Contém informações como nome, preço, descrição e categoria associada.

### Categorias
- Representa as categorias que organizam os produtos, como "Ação", "RPG" ou "Esportes".
- Permite organizar e filtrar os produtos por tipos específicos.

## Funcionalidades com caminhos para testes (insomnia)

### Produtos

- Listar todos os produtos  (/produtos)
- Buscar por ID  (/produtos/':id')
- Buscar por nome  (produtos/nome/':nome')
- Filtrar por preço (crescente)  (/produtos/preco/crescente)
- Filtrar por preço (decrescente)  (/produtos/preco/decrescente)
- Filtro por faixa de preço  (/produtos/preco/faixa?min=100&max=300)
- Criar produto  (/produtos  = body: JSON)
- Atualizar produto  (/produtos = body: JSON)
- Excluir produto  (/produtos/':id')

### Categorias

- Listar todas as categorias (/categorias)
- Buscar por ID  (/categorias/':id')
- Buscar por descrição  (/categorias/descricao/':texto')
- Criar categoria  (/categorias = body: JSON)
- Atualizar categoria  (/categorias = body: JSON)
- Excluir categoria  (/categorias/':id') 

### Usuário

- Login  (/usuarios/logar  = body: JSON)
- Listar todos os usuarios  (/usuarios/all)
- Buscar por ID  (/usuarios/':id')
- Criar usuario  (/usuarios/cadastrar  = body: JSON)
- Atualizar usuario  (/usuarios/atualizar  = body: JSON)

## Configuração do Projeto

### Pré-requisitos

- Node.js
- Gerenciador de pacotes (npm ou yarn)
- Banco de dados configurado

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/josifermaodev/e-commerce_games.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`.

4. Inicie o servidor:
   ```bash
   npm run start
   # ou
   yarn start
   ```

## Tecnologias Utilizadas

- **NestJS:** Framework para construção do back-end.
- **TypeScript:** Linguagem utilizada no projeto.
- **TypeORM:** ORM para gerenciar o banco de dados.
- **MySQL:** Banco de dados utilizado para armazenar os dados.


### Segue a lista de alguns produtos para serem cadastrados para realização de testes:

```bash
[
	{
		"id": 1,
		"nome": "Halo Infinity",
		"preco": 139.9,
		"imagem": "https://ik.imagekit.io/q5tv5x3k8/halo.png?updatedAt=1737306502816",
		"video": "https://youtu.be/tMDKsQ6Qkn8?si=yKHUXTmRmfeLuDYj",
		"estoque": 25,
		"categoria": {
			"id": 1,
			"descricao": "FPS"
		}
	},
	{
		"id": 2,
		"nome": "Blood Born",
		"preco": 257.9,
		"imagem": "https://ik.imagekit.io/q5tv5x3k8/bloodborne-fundo-cinza.png?updatedAt=1737306502736",
		"video": "https://youtu.be/bfxOYfo4A_I?si=WG9EGQcRqVJdlBNF",
		"estoque": 13,
		"categoria": {
			"id": 2,
			"descricao": "RPG"
		}
	},
	{
		"id": 3,
		"nome": "Hogwarts Legacy",
		"preco": 189.9,
		"imagem": "https://ik.imagekit.io/q5tv5x3k8/hogwarts.png?updatedAt=1737306502701",
		"video": "https://youtu.be/FkRmbRKLwoc?si=zL_O0_l91mJeWK0o",
		"estoque": 35,
		"categoria": {
			"id": 2,
			"descricao": "RPG"
		}
	},
	{
		"id": 4,
		"nome": "Shadow of the Tomb Raider",
		"preco": 289.9,
		"imagem": "https://ik.imagekit.io/q5tv5x3k8/tomb_raider-min.png?updatedAt=1737306502509",
		"video": "https://youtu.be/SQWkWGHraGU?si=oVQ0ux3Ob047X6zj",
		"estoque": 21,
		"categoria": {
			"id": 3,
			"descricao": "Ação e Aventura"
		}
	},
	{
		"id": 5,
		"nome": "Jogo Pokemon Ruby Version Original",
		"preco": 429.9,
		"imagem": "https://ik.imagekit.io/q5tv5x3k8/Pok%C3%A9mon_Platinum_cover.png?updatedAt=1737306502483",
		"video": "https://youtu.be/rsjsahTqTSo?si=02PTxPeJkIboeJmK",
		"estoque": 8,
		"categoria": {
			"id": 2,
			"descricao": "RPG"
		}
	},
	{
		"id": 6,
		"nome": "Spider-Man",
		"preco": 154.99,
		"imagem": "https://ik.imagekit.io/q5tv5x3k8/Spider-Man_jogo_2018_capa.png?updatedAt=1737306502483",
		"video": "https://www.youtube.com/live/oEUGhLOe0fM?si=JMNKf7hSUM-xKIJX",
		"estoque": 17,
		"categoria": {
			"id": 3,
			"descricao": "Ação e Aventura"
		}
	},
	{
		"id": 7,
		"nome": "Grand Theft Auto 5",
		"preco": 97.91,
		"imagem": "https://ik.imagekit.io/q5tv5x3k8/Figura-9-Capa-do-jogo-Grand-Theft-Auto.png?updatedAt=1737306502041",
		"video": "https://youtu.be/LJfgtPqzbPs?si=KAUktDxbWbPSEirz",
		"estoque": 44,
		"categoria": {
			"id": 4,
			"descricao": "Simulação"
		}
	}
]
```
