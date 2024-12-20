import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Card from "../Components/Card";


const Home = () => {
    const { data, error, isLoading } = useContext(ProductContext);


    return (
        <div className="container">
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Error message={error} />
            ) : (
                data && (
                    <div className="row mt-5">
                        {data.products.map((item) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-3" key={item.id}>
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default Home;
