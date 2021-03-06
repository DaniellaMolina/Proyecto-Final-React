import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";


const Item =({item})=>{
  return(
   
    <div className="card text-center" id="cards-productos">
      <div className="card-body">
        <img src={item.img} id="" className="card-img-top img-fluid" alt=""/>
        <h3 className="card-title text-secondary">{item.nombre}</h3>
        <p className="card-text text-secondary">${item.precio}</p>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <ItemCount product_name={item?.title} stock={item?.stock} initial={1}/>
        </div>
      </div>
  </div>

)};

export default Item;