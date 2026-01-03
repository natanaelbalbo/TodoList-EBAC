import { useState, useEffect } from 'react';

/**
 * Hook customizado para sincronizar estado com localStorage
 * @param {string} key - chave do localStorage
 * @param {any} initialValue - valor inicial
 * @returns {Array} [valor, função para atualizar]
 */
export const useLocalStorage = (key, initialValue) => {
  // Inicializa o estado com valor do localStorage ou valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao carregar ${key} do localStorage:`, error);
      return initialValue;
    }
  });

  // Atualiza localStorage quando o valor muda
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
