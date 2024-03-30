import Productpage from "../Productpage/Productpage";

const Home = () => {
    return (
        <>
           <div className="flex justify-center items-center pt-4">
               <h4 className="text-2xl font-semibold">Search Your Product</h4>
           </div>
           <div className="px-16">
             <Productpage/>
           </div>
        </>
    );
};

export default Home;