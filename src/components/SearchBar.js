import React, { useState } from 'react';

const Busqueda = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Query enviada:', query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search-input"
        placeholder="Buscar..."
      />
      <button type="submit" className="search-button">Buscar</button>
    </form>
  );
};

export default Busqueda;