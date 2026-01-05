import styled from 'styled-components';
import CardProduto from './CardProduto';

// Container principal da vitrine com layout responsivo
const VitrineContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px 24px;
`;

// Título da página
const PageTitle = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

// Subtítulo com informações sobre a demo
const PageSubtitle = styled.p`
  text-align: center;
  color: #f8f9fa;
  font-size: 1.125rem;
  margin-bottom: 48px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

// Grid de produtos responsivo
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
  justify-items: center;
`;

// Container para informações sobre a tecnologia
const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 24px;
  margin: 48px auto 32px;
  max-width: 800px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #ffffff;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 8px 0;
    padding-left: 24px;
    position: relative;
    
    &:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #198754;
      font-weight: 700;
    }
  }
`;

/**
 * Componente VitrineProdutos
 * 
 * Página de demonstração que exibe múltiplos CardProduto
 * com dados estáticos para mostrar o funcionamento da estilização dinâmica
 */
const VitrineProdutos = () => {
  // Dados estáticos de produtos para demonstração
  const produtos = [
    {
      id: 1,
      nome: "Notebook Gamer",
      preco: 4999.99,
      adicionado: false
    },
    {
      id: 2,
      nome: "Mouse Sem Fio",
      preco: 149.90,
      adicionado: true
    },
    {
      id: 3,
      nome: "Teclado Mecânico RGB",
      preco: 599.00,
      adicionado: false
    },
    {
      id: 4,
      nome: "Monitor 27\" 144Hz",
      preco: 1799.99,
      adicionado: false
    },
    {
      id: 5,
      nome: "Headset Gamer",
      preco: 399.90,
      adicionado: true
    },
    {
      id: 6,
      nome: "Webcam Full HD",
      preco: 299.00,
      adicionado: false
    }
  ];

  return (
    <VitrineContainer>
      <PageTitle>🛍️ Vitrine de Produtos</PageTitle>
      <PageSubtitle>
        Demonstração de CSS-in-JS com Styled Components
      </PageSubtitle>

      <InfoBox>
        <InfoTitle>📚 Recursos Implementados:</InfoTitle>
        <InfoList>
          <li>Styled Components com template literals</li>
          <li>Estilização dinâmica baseada em props ($adicionado)</li>
          <li>Mudança de cor do botão (verde #198754 / cinza #6c757d)</li>
          <li>Componentização organizada e bem estruturada</li>
          <li>Transições e efeitos hover suaves</li>
          <li>Layout responsivo com CSS Grid</li>
        </InfoList>
      </InfoBox>

      <ProductGrid>
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            adicionadoInicial={produto.adicionado}
          />
        ))}
      </ProductGrid>
    </VitrineContainer>
  );
};

export default VitrineProdutos;
