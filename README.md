# 📝 Todo List - React Avançado

Uma aplicação moderna de lista de tarefas desenvolvida com React, utilizando recursos avançados como Hooks customizados, Context API, Memoization e persistência de dados com localStorage.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **Context API** - Gerenciamento de estado global
- **Custom Hooks** - Lógica reutilizável encapsulada
- **React.memo** - Otimização de performance
- **useMemo & useCallback** - Memoization de valores e funções
- **localStorage** - Persistência de dados no navegador

## ✨ Funcionalidades

### Funcionalidades Principais
- ✅ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Remover tarefas da lista
- ✅ Filtrar tarefas (Todas, Concluídas, Pendentes)
- ✅ Persistência de dados com localStorage
- ✅ Estatísticas em tempo real
- ✅ Interface responsiva e moderna

### Recursos Técnicos Implementados

#### 1. **Hooks do React**
- `useState` - Gerenciamento de estado local
- `useEffect` - Sincronização com localStorage
- `useContext` - Acesso ao contexto global
- `useMemo` - Memoização de valores computados
- `useCallback` - Memoização de funções

#### 2. **Context API**
- `TodoContext` - Contexto global para gerenciar estado das tarefas
- `TodoProvider` - Provider que envolve a aplicação
- `useTodos` - Hook customizado para acessar o contexto

#### 3. **Hooks Customizados**
- `useLocalStorage` - Sincroniza estado com localStorage automaticamente
- `useInput` - Gerencia estado de inputs de formulário

#### 4. **Memoization**
- `React.memo` - Otimiza renderização de componentes
- `useMemo` - Otimiza cálculos de filtros e estatísticas
- `useCallback` - Otimiza funções de manipulação de tarefas

## 📁 Estrutura do Projeto

```
todo-react-avancado/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx          # Formulário de adição de tarefas
│   │   ├── TodoForm.css
│   │   ├── TodoItem.jsx          # Item individual da lista
│   │   ├── TodoItem.css
│   │   ├── TodoList.jsx          # Lista de tarefas
│   │   ├── TodoList.css
│   │   ├── TodoFilter.jsx        # Filtros de visualização
│   │   ├── TodoFilter.css
│   │   ├── TodoStats.jsx         # Estatísticas das tarefas
│   │   └── TodoStats.css
│   ├── context/
│   │   └── TodoContext.jsx       # Context API e Provider
│   ├── hooks/
│   │   ├── useLocalStorage.js    # Hook para localStorage
│   │   └── useInput.js           # Hook para inputs
│   ├── App.jsx                   # Componente principal
│   ├── App.css
│   ├── main.jsx                  # Ponto de entrada
│   └── index.css                 # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/todo-react-avancado.git
cd todo-react-avancado
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 💡 Conceitos Aplicados

### 1. Context API
O estado global da aplicação é gerenciado através do `TodoContext`, que fornece:
- Lista de tarefas
- Funções de manipulação (adicionar, remover, toggle)
- Filtros ativos
- Estatísticas computadas

### 2. Custom Hooks

#### useLocalStorage
Hook que sincroniza automaticamente o estado com o localStorage:
```javascript
const [todos, setTodos] = useLocalStorage('todos', []);
```

#### useInput
Hook que simplifica o gerenciamento de inputs:
```javascript
const inputProps = useInput('');
// Retorna: { value, onChange, reset }
```

### 3. Memoization

#### React.memo
Todos os componentes são otimizados com `React.memo` para evitar renderizações desnecessárias:
```javascript
const TodoItem = React.memo(({ todo, onToggle, onRemove }) => {
  // ...
});
```

#### useMemo
Usado para otimizar cálculos caros:
```javascript
const filteredTodos = useMemo(() => {
  // Filtragem de tarefas
}, [todos, filter]);
```

#### useCallback
Usado para memoizar funções:
```javascript
const addTodo = useCallback((text) => {
  // Adiciona tarefa
}, [setTodos]);
```

## 🎨 Interface

A interface foi desenvolvida com foco em:
- **Responsividade** - Funciona perfeitamente em desktop e mobile
- **Acessibilidade** - Labels e ARIA attributes apropriados
- **Feedback Visual** - Animações e transições suaves
- **Design Moderno** - Gradientes e sombras sutis

## 📊 Performance

A aplicação implementa várias técnicas de otimização:
- Memoização de componentes com `React.memo`
- Memoização de valores com `useMemo`
- Memoização de callbacks com `useCallback`
- Renderizações condicionais
- Lazy loading de componentes (quando necessário)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso da EBAC.

## 👨‍💻 Autor

Desenvolvido como projeto do módulo de React Avançado - EBAC

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
