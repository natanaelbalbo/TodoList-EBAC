import styled from 'styled-components';
import { useState } from 'react';

// Styled Components - Estilização utilizando template literals
// Container principal do card com sombra e bordas arredondadas
const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Título do produto com fonte destacada
const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
  line-height: 1.3;
`;

// Container para informações de preço
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// Label para o preço
const PriceLabel = styled.span`
  font-size: 0.875rem;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// Valor do preço destacado
const Price = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #198754;
`;

// Botão com estilização dinâmica baseada na prop 'adicionado'
// Demonstra o uso de props para alteração de estilos
const AddButton = styled.button`
  background-color: ${props => props.$adicionado ? '#198754' : '#6c757d'};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: ${props => props.$adicionado ? '#146c43' : '#5c636a'};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Badge de status para indicar se o produto foi adicionado
const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${props => props.$adicionado ? '#d1e7dd' : '#e2e3e5'};
  color: ${props => props.$adicionado ? '#0f5132' : '#41464b'};
  align-self: flex-start;
`;

/**
 * Componente CardProduto
 * 
 * Demonstra o uso de Styled Components para criar um card de produto
 * com estilização dinâmica baseada no estado 'adicionado'
 * 
 * @param {string} nome - Nome do produto
 * @param {number} preco - Preço do produto
 * @param {boolean} adicionadoInicial - Estado inicial do produto no carrinho
 */
const CardProduto = ({ nome, preco, adicionadoInicial = false }) => {
  // State para controlar se o produto foi adicionado ao carrinho
  const [adicionado, setAdicionado] = useState(adicionadoInicial);

  // Handler para toggle do estado de adicionado
  const handleClick = () => {
    setAdicionado(!adicionado);
  };

  // Formata o preço para exibição em formato brasileiro
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <CardContainer>
      {/* Badge de status indicando se está no carrinho */}
      <StatusBadge $adicionado={adicionado}>
        {adicionado ? '✓ No carrinho' : 'Disponível'}
      </StatusBadge>

      {/* Nome do produto */}
      <ProductTitle>{nome}</ProductTitle>

      {/* Preço do produto */}
      <PriceContainer>
        <PriceLabel>Preço</PriceLabel>
        <Price>{precoFormatado}</Price>
      </PriceContainer>

      {/* Botão com estilização dinâmica baseada no estado 'adicionado' */}
      <AddButton 
        $adicionado={adicionado} 
        onClick={handleClick}
      >
        {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </AddButton>
    </CardContainer>
  );
};

export default CardProduto;
