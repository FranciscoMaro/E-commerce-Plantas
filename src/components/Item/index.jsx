import React from "react";
import { Link } from "react-router-dom";
import "./item.css";



const Item = ({ info }) => {
	

	return (
		<Link to={`/detalle/${info.id}`} className="planta">
			<img src={info.image} alt="" />
			<p>{info.title}</p>
		</Link>
	);
};

export default Item;
