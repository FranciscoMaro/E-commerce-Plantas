import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Title from "../Title";


const arboles = [
	{id: 1, price: 5000, image: "https://www.primeraedicion.com.ar/wp-content/uploads/2021/10/limon.jpg", category: "citricos", title: "Limonero"},
	{id: 2, price: 4500, image: "https://citricos.com/calculadora2/uploads/images/202105/image_750x_60afe29be028d.jpg", category: "citricos", title: "Quinoto"},
	{id: 3, price: 6000, image: "https://http2.mlstatic.com/D_NQ_NP_938612-MLA31847126770_082019-W.jpg", category: "pinos", title: "Thuja"},
	{id: 4, price: 7000, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Araucaria_en_Parque_Nacional_Conguillio.jpg/1200px-Araucaria_en_Parque_Nacional_Conguillio.jpg", category: "pinos", title: "Araucaria"},
];



export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const getData = new Promise(resolve => {
					setTimeout(() => {
						resolve(arboles);
					},);
		});
		if (categoriaId) {
			getData.then(res => setData(res.filter(arbol=> arbol.category === categoriaId)));
			
		}else{
			getData.then(res => setData(res));

		}

	}, [categoriaId])

	

	return (
		<>
			<Title greeting={texto} />
			
			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;
