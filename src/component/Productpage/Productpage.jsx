import { useEffect, useState } from "react";
import Productcard from "../ProductCard/Productcard";

const Productpage = () => {
    //useState
    const [products, setProducts] = useState([]);
    //useEffect
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=> setProducts(data));
    },[products])
    //
    //console.log(products);
    return (
        <div>
            <h3 className='text-2xl'>Product List: {products.length}</h3>
            <div className="flex gap-7 flex-wrap pt-8">
               {
                   products.map((product, idx)=> <Productcard
                    key={idx}
                    product={product}
                   ></Productcard>)
               }
            </div>
        </div>
    );
};

export default Productpage;