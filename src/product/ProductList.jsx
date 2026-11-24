import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick(){
        setLoad(true);
    }

    useEffect(() => {
        console.info("Call Use Effect With Empty Array []")
    }, []); //empty array cuma di panggil sekali aja

    //ini adalah async, di bawah akan dibuat menjadi async await
    // useEffect(() => {
    //     if(load){//kalo harus diload akan di panggil
    //         fetch("/product.json")
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data))
    //     }

    //     return () => {
    //         console.log("Product List component unmounted")
    //     }

    // }, [load]);//kalo value loadnya itu berubah, baru saya pengen panggil di effectnya nih.

    //=================async await================
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/product.json");
            const data = await response.json();
            setProducts(data);
        }

        console.log("Load Product");
        if(load){
            fetchProducts();
        }
    }, [load]);

    return (
        <div>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Product</button>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}