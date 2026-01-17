# 📝 Todo List EBAC

Projeto de gerenciamento de tarefas desenvolvido como parte do curso de Engenheiro Front-end da EBAC. Uma aplicação que demonstra o uso de React Avançado, incluindo Context API, Hooks customizados e técnicas de otimização de performance.

## 🎯 Sobre o Projeto

Este gerenciador de tarefas foi criado para aplicar conceitos avançados do React em um cenário real de desenvolvimento. O projeto foca em criar uma aplicação performática e escalável, utilizando as melhores práticas de desenvolvimento front-end e patterns de otimização.

### Problema Resolvido

Aplicações de lista de tarefas frequentemente enfrentam problemas de performance quando o número de itens cresce, além de perderem os dados ao recarregar a página. Este projeto aborda essas questões através de:

- **Otimização de Renderização**: Uso de `React.memo`, `useMemo` e `useCallback` para evitar re-renderizações desnecessárias
- **Persistência de Dados**: Integração com localStorage através de hook customizado, mantendo as tarefas salvas localmente
- **Gerenciamento de Estado Eficiente**: Context API centraliza o estado, evitando prop drilling e facilitando manutenção
- **Separação de Responsabilidades**: Hooks customizados encapsulam lógica reutilizável, tornando o código mais limpo e testável

## 📚 O Que Aprendi

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

- **Context API**: Implementação de estado global sem bibliotecas externas, entendendo quando usar Context vs prop drilling
- **Custom Hooks**: Criação de hooks reutilizáveis (`useLocalStorage`, `useInput`) para abstrair lógica complexa
- **Memoization**: Aplicação prática de `React.memo`, `useMemo` e `useCallback` para otimização de performance
- **Ciclo de Vida com Hooks**: Uso avançado de `useEffect` para sincronização com APIs externas (localStorage)
- **Computed Values**: Criação de valores derivados do estado usando `useMemo` para cálculos de estatísticas
- **Padrões de Composição**: Estruturação de componentes seguindo princípios de componentes controlados e não-controlados
- **Performance React**: Identificação de gargalos e aplicação de técnicas de otimização

## 🚀 Tecnologias Utilizadas

- **React 18.2** - Biblioteca para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **Context API** - Gerenciamento de estado global
- **JavaScript ES6+** - Features modernas do JavaScript
- **CSS3** - Estilização com variáveis CSS e animações

## ✨ Funcionalidades

- ✅ Adicionar, remover e marcar tarefas como concluídas
- ✅ Filtrar tarefas por status (Todas, Pendentes, Concluídas)
- ✅ Persistência automática no localStorage
- ✅ Estatísticas em tempo real do progresso
- ✅ Interface responsiva e moderna
- ✅ Performance otimizada com memoization

## 📁 Estrutura do Projeto

```
todolist-ebac/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx          # Formulário de adição
│   │   ├── TodoItem.jsx          # Item da lista
│   │   ├── TodoList.jsx          # Lista de tarefas
│   │   ├── TodoFilter.jsx        # Filtros de visualização
│   │   └── TodoStats.jsx         # Estatísticas
│   ├── state/
│   │   └── TodoContext.jsx       # Context API global
│   ├── hooks/
│   │   ├── useLocalStorage.js    # Persistência localStorage
│   │   └── useInput.js           # Gerenciamento de inputs
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## ⚙️ Instalação e Uso

### Pré-requisitos

- Node.js 16 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/todolist-ebac.git

# Entre na pasta do projeto
cd todolist-ebac

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:5173 no navegador.

### Build para Produção

```bash
npm run build
npm run preview
```

## 💡 Conceitos Técnicos Aplicados

### Context API

O estado global é gerenciado através do `TodoContext`, centralizando:
- Lista de tarefas e suas operações CRUD
- Filtros de visualização
- Cálculos de estatísticas

### Custom Hooks

**useLocalStorage**: Sincroniza automaticamente o estado com o localStorage
```javascript
const [todos, setTodos] = useLocalStorage('todos', []);
```

**useInput**: Simplifica o gerenciamento de inputs de formulário
```javascript
const { value, onChange, reset } = useInput('');
```

### Otimização de Performance

- **React.memo**: Componentes memoizados para evitar re-renderizações desnecessárias
- **useMemo**: Cálculos de filtros e estatísticas otimizados
- **useCallback**: Funções memoizadas com referências estáveis

## 📝 Licença

Projeto desenvolvido para fins educacionais no curso EBAC.
