import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";
import BasketItem from "../Components/BasketItem";

const Basket = () => {

    const { basket, clearBasket } = useContext(BasketContext);

    const totalAmount = basket.reduce((total, item) => total + item.amount, 0);

    const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0).toFixed(2);

    return (
        <div className="container my-5">
            <div className="d-flex flex-column gap-5 ">
                {basket.length === 0 && (
                    <p className="text-center my-5 d-flex flex-column gap-3">
                        <span>Öncelikle sepete bir ürün ekleyiniz</span>
                        <Link to="/">Ürünler</Link>
                    </p>
                )}

                {basket?.map((item) => (

                    <BasketItem item={item} key={item.id} />
                ))}

            </div>

            <div className="rounded my-5  ">
                <div className="fs-4 d-flex justify-content-between align-items-center">
                    <p>
                        Sepette: <span className="text-warning">{totalAmount}</span>ürün var
                    </p>
                    <p>
                        Toplam Fiyatı: <span className="text-success">{totalPrice}</span>$
                    </p>

                    <button onClick={clearBasket} className="btn btn-warning">Siparişi Onayla</button>
                </div>
            </div>

        </div>
    );
};

export default Basket;
