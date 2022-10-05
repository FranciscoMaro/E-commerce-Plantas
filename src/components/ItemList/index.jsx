import React from "react";
import Item from "../Item";

const ItemList = ({ data = [] }) => {
	return (
		 data.map(arbol => <Item key={arbol.id} info={arbol} />)
		 );
}

export default ItemList;
