# SenneLiquor - Teste técnico

## Visão geral
Este é um projeto que tem como propósito apresentar meu conhecimento a empresa SenneLiquor e concorrer a vaga de desenvolvedor júnior.
## Funcionalidades
O sistema tem como principal funcionalidade Listar chamados para hospitais e, com base em coordenadas, mostrar a localização em um mapa.

## Tecnologias utilizadas

- ReactJS, TailwindCSS, Axios e Leaflet-React

## Observações

- O desenvolvimento teve como base as intruções do repositório https://github.com/senneliquor/desafio-senneliquor

## Como executar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/DevDaviSouza/SenneLiquor.git
cd SenneLiquor
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie a aplicação
```bash
npm run dev
```
Rode o comando de inicio do sistema tanto no frontend quanto no backend ao mesmo tempo

### 4. Crie um usuário utilizando a rota post("/user")
```json
{
    "nm_login": "davi.souza.santos",
    "ds_senha": "1234"
}
