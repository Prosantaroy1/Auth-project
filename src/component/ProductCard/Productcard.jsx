/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

  
const Productcard = ({product}) => {
    const {id,title, image,price, rating} = product;
    //
   
    return (
        <div>
            <div className="card card-compact w-[370px] h-[350px] bg-base-100 shadow-xl">
               <figure>
                  <img src={image} alt="Shoes" className="w-full h-96" />
                </figure>
               <div className="pt-4 card-body">
                 <h2 className="text-lg">{title}</h2>
                 <div className="flex justify-between items-center gap-4">
                    <p className="bg-green-300 p-2 rounded-2xl">Price: ${price}</p>
                    <p className=" p-2 rounded-2xl bg-orange-300">Rating: {rating.rate}</p>
                 </div>
               </div>
               <Link to={`/card/${id}`}>
                  <button  className="btn btn-block bg-teal-700">ADD TO CARD</button>
                </Link>
            </div>
        </div>
    );
};

export default Productcard;