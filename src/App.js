import { useState, createContext } from 'react';
import { nikeData } from "./data/nikeData";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';

import './App.css';

//creating the context

export const ProductContext = createContext (null);

function App() {
  const [data, setData] = useState(nikeData);
  const [cart, setCart] = useState([]);


  //wrap the components inside the context provider and pass the values
  return (
    <ProductContext.Provider value = {{data, cart, setCart}} >
    <div className="">
     <Header />
     <ProductsList />
     <Footer/>
    </div>
    </ProductContext.Provider>
  );
}

export default App;
