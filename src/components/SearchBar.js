import React, { useContext, useState } from 'react';
import { dataContext } from './context/DataContext';

const Busqueda = () => {
  const { searchProducts } = useContext(dataContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Categoría seleccionada:', selectedCategory);
    // Llamar a la función de búsqueda con la categoría seleccionada
    searchProducts(selectedCategory);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="search-input"
        >
          <option value="">Seleccionar...</option>
          <option value="Herbicida">Herbicida</option>
          <option value="Fungicida">Fungicida</option>
          <option value="Fertilizante">Fertilizante</option>
          <option value="Insecticida">Insecticida</option>
        </select>
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Busqueda;