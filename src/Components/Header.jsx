import { Link, NavLink } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { useContext } from "react";
import { BasketContext } from "../context/basketContext";


const Header = () => {
    const { basket } = useContext(BasketContext);

    //toplam eleman sayısını hesapla (miktar değerrini topla)
    const total = basket.reduce((total, item) => total + item.amount, 0);

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top py-3">

            <div className="container-fluid">
                <Link className="navbar-brand" href="/">

                    <h2 className="d-flex align-items-center gap-2">
                        <FaShopify className="text-warning" />
                        Context Store
                    </h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Context</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sepet">Sepet</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kategoriler
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <button className="dropdown-item" >
                                            Kıyafet
                                        </button>

                                        <button className="dropdown-item">
                                            Elektronik
                                        </button>
                                        <NavLink to="/sepet">Sepet</NavLink>
                                        <span className="badge bg-danger ms-2">{total}</span>
                                    </li>


                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
