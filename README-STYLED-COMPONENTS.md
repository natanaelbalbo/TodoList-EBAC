# Projeto de Refatoração CSS-in-JS com Styled Components

Este projeto demonstra a aplicação de conceitos de **CSS-in-JS** utilizando **Styled Components** em uma aplicação React.

## 📋 Objetivo

Refatorar os estilos de componentes React utilizando Styled Components, aplicando estilização dinâmica baseada em props e seguindo boas práticas de componentização.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção de interfaces
- **Vite** - Build tool e dev server
- **Styled Components** - CSS-in-JS para estilização de componentes
- **JavaScript (ES6+)** - Linguagem de programação

## 📦 Componente CardProduto

O componente principal criado para esta atividade é o **CardProduto**, que demonstra:

### ✨ Recursos Implementados

1. **CSS-in-JS com Template Literals**
   - Todos os estilos são definidos usando `styled-components`
   - Estilos organizados e separados por responsabilidade

2. **Estilização Dinâmica**
   - Botão muda de cor baseado na prop `adicionado`:
     - ✅ `true`: verde (#198754)
     - ⚪ `false`: cinza (#6c757d)

3. **Componentização**
   - Estrutura modular e reutilizável
   - Nomeação clara e descritiva
   - Código bem comentado

4. **Interatividade**
   - Estado gerenciado com React hooks
   - Toggle de adição/remoção do carrinho
   - Feedback visual para o usuário

## 🗂️ Estrutura de Arquivos

```
src/
├── components/
│   ├── CardProduto.jsx      # Componente de card de produto com Styled Components
│   └── VitrineProdutos.jsx  # Página de demonstração com múltiplos produtos
├── App.jsx                   # Componente principal com navegação
└── ...
```

## 🎨 Styled Components Criados

### CardProduto.jsx

- **CardContainer**: Container principal do card com efeitos hover
- **ProductTitle**: Título estilizado do produto
- **PriceContainer**: Wrapper para informações de preço
- **PriceLabel**: Label descritivo para o preço
- **Price**: Valor monetário em destaque
- **AddButton**: Botão com estilização dinâmica baseada em props
- **StatusBadge**: Badge de status do produto

### VitrineProdutos.jsx

- **VitrineContainer**: Container principal com gradient background
- **PageTitle**: Título da página
- **PageSubtitle**: Subtítulo informativo
- **ProductGrid**: Grid responsivo para exibição de produtos
- **InfoBox**: Box de informações sobre recursos implementados

## 💻 Como Executar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd TodoList-Ebac
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   - Abra `http://localhost:5173` (ou a porta indicada)
   - Clique no botão "🛍️ Vitrine Produtos" para ver a demonstração

## 🎯 Requisitos Atendidos

✅ **Estrutura Inicial**
- Aplicação React com Vite
- Componente CardProduto com nome, preço e botão
- Dados estáticos para demonstração

✅ **Refatoração com CSS-in-JS**
- Styled Components implementado
- Estilos definidos com template literals
- Organização e boas práticas

✅ **Estilização Dinâmica**
- Botão com cores condicionais baseadas em props
- Verde (#198754) quando adicionado
- Cinza (#6c757d) quando não adicionado

✅ **Componentização e Organização**
- Estilos separados por responsabilidade
- Nomeação clara e descritiva
- Código bem comentado e documentado

## 📝 Conceitos Aplicados

### 1. Template Literals
```javascript
const Button = styled.button`
  background-color: ${props => props.$adicionado ? '#198754' : '#6c757d'};
  // ... mais estilos
`;
```

### 2. Props Dinâmicas
```javascript
<AddButton $adicionado={adicionado} onClick={handleClick}>
  {adicionado ? 'Remover' : 'Adicionar'}
</AddButton>
```

### 3. Pseudo-classes e Animações
```javascript
const CardContainer = styled.div`
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;
```

## 🎓 Aprendizados

Este projeto demonstra:
- Como usar Styled Components em uma aplicação React
- Estilização condicional baseada em props
- Organização de componentes estilizados
- Boas práticas de CSS-in-JS
- Componentização e reutilização de código

## 📸 Funcionalidades

- Visualização de produtos em grid responsivo
- Adicionar/remover produtos do carrinho com um clique
- Mudança visual dinâmica do status do produto
- Interface moderna e interativa
- Transições suaves e feedback visual

## 🔗 Links Úteis

- [Styled Components Documentation](https://styled-components.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

**Desenvolvido como parte do módulo CSS-in-JS - EBAC**
