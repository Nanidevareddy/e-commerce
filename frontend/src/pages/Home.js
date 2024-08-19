import { useEffect, useState } from "react";
import ProductCard from "../components/productcard";
import { useParams, useSearchParams } from "react-router-dom";

export default function Home() {
    const [products, setproducts] = useState([])
    const [Searchparam,setSearchParams]=useSearchParams()
    useEffect(() => {
        console.log(" logged in home")
        fetch(process.env.REACT_APP_URL_API+'/products?'+Searchparam)
            .then(res => res.json())
            .then(res => setproducts(res.products))
    },[Searchparam])
    return <>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                {products.map(product=><ProductCard product={product}/>)}
            </div>
        </section>
    </>
}