# React Hooks - Guia Completo

Este projeto é um guia completo sobre todos os Hooks do React. Ele explora os Hooks mais utilizados, suas funcionalidades e exemplos práticos de uso.

## 🚀 Tecnologias Utilizadas

- React com Vite
- JavaScript
- Tailwind CSS 

## 📦 Instalação e Inicialização

Siga os passos abaixo para rodar o projeto localmente:

### 1️⃣ Clone o Repositório
```sh
git clone https://github.com/Ipedrp/react-hook.git
```

### 2️⃣ Acesse a Pasta do Projeto
```sh
cd react-hook
```

### 3️⃣ Instale as Dependências
```sh
npm install
# ou
yarn install
```

### 4️⃣ Rode o Servidor de Desenvolvimento
```sh
npm run dev
# ou
yarn dev
```

Após executar o comando acima, o terminal exibirá um link como este:
```
Local: http://localhost:5173/
```
Acesse o link no navegador para visualizar o projeto em execução.

## 📚 Hooks Abordados

O projeto aborda os seguintes Hooks do React:

- `useState` - Gerenciamento de estado local
- `useEffect` - Efeitos colaterais em componentes
- `useContext` - Compartilhamento de estado global
- `useRef` - Referência a elementos do DOM
- `useReducer` - Gerenciamento avançado de estado
- `useMemo` - Otimização de cálculos
- `useCallback` - Otimização de funções
- `useLayoutEffect` - Execução sincronizada com renderização
- `useImperativeHandle` - Controle de refs customizadas
- `useDebugValue` - Depuração de hooks customizados

## 📌 Estrutura do Projeto

```
├── src
│   ├── components  # Componentes reutilizáveis
│   ├── layout      # Layout padrão da aplicação
│   ├── pages       # Páginas da aplicação
│   ├── routes      # Rotas da aplicação
│   ├── App.jsx     # Componente principal
│   ├── main.jsx    # Entrada da aplicação
├── public          # Arquivos estáticos
├── package.json    # Dependências do projeto
├── vite.config.js  # Configuração do Vite
└── README.md       # Documentação do projeto
```