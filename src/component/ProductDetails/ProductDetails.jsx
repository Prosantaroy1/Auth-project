import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    //
    const product = useLoaderData();
    const {title, image,price,  description} = product;
    return (
        <div className="px-20 pt-12">
            <div className="flex gap-20">
                <img src={image} alt="" className="w-[420px] h-[350px]"/>
                <div className="pt-7 space-y-3">
                    <h3><span className="text-xl font-bold">Title</span> : {title}</h3>
                    <h4><span className="text-xl font-bold">Price</span> : ${price}</h4>
                    <button className="btn btn-warning">ADD TO CARD</button>
                </div>
            </div>
            <h4 className="pt-4 pb-3 font-bold text-2xl">Description Product</h4>
            <p>{description}</p>
        </div>
    );
};

export default ProductDetails;