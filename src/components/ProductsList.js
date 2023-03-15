import ProductListItem from "./ProductListItem";

//context

import {ProductContext} from "../App";
import {useContext} from "react";

function ProductsList() {


  //consume the data from the context

  const productContextValue = useContext (ProductContext);

  return productContextValue.data.map((item) => (
    <ProductListItem 
      product={item} 
      key={item.id} 
      />
  ));
}

export default ProductsList;