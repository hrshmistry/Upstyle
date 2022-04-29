import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useCart } from '../../context/Context';
import "./Home.css"

const Home = () => {

    const { state: { products } } = useCart();

    return (
        <div className="home">
            {products.map(product => {
                return (<div key={product.key}>
                    <ProductCard product={product} />
                </div>)
            })}
        </div>
    )
}

export default Home