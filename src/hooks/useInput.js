import { useState } from 'react';

/**
 * Hook customizado para gerenciar inputs de formulário
 * @param {string} initialValue - valor inicial do input
 * @returns {Object} { value, onChange, reset }
 */
export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset
  };
};
