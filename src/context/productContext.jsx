import axios from "axios";
import { createContext, useEffect, useState } from "react";


//* 1.Adım:Context yapısının temelini oluşturur.
export const ProductContext = createContext();

//* 2.Adım:Context yapısında tutulcak verileri/fonksiyonları ve bunları
//* diğer bileşenlere aktarıcak sağlayıcı tanımla

export const ProductProvider = ({ children }) => {
    //* sağlayıcı içerisinde tutulcak olan stateleri tanımlarız
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://dummyjson.com/products')
            .then((res) => setData(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    //*3.adım : Uygulamaya sağlanacak verileri belirle

    return (
        <ProductContext.Provider value={{ data, isLoading, error }}>
            {children}
        </ProductContext.Provider>
    );

};

