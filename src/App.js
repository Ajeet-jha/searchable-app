import React from 'react';
import './App.css';
import FilterableProductTable from './components/searchBar/FilterableProductTable';
import PRODUCTS from './components/Products';
const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <FilterableProductTable  products={PRODUCTS} />
      </header>
    </div>
  );
}

export default App;
