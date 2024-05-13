import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";
import './cards.css'
const Cards = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
 

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <section>
      <div className="container">
     <div className="card">
        {products.map((elem)=>(
            <div className="cards"  key={elem.id}>
                <img src={elem.img}/>
                <p>{elem.title}</p>

            </div>
        ))}

     </div>
      </div>
    </section>
  );
};

export default Cards;
